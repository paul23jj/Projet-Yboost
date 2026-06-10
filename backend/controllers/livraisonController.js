const fetch = require('node-fetch');

const getDelaiLivraison = (codePostal) => {
    const dept = parseInt(codePostal?.substring(0, 2));

    if ([75, 77, 78, 91, 92, 93, 94, 95].includes(dept)) {
        return { delai: 1, zone: 'Île-de-France', transporteur: 'Colissimo' };
    }
    if (dept >= 1 && dept <= 50) {
        return { delai: 2, zone: 'Nord/Centre France', transporteur: 'Colissimo' };
    }
    if (dept >= 51 && dept <= 76) {
        return { delai: 2, zone: 'Centre/Est France', transporteur: 'Colissimo' };
    }
    if (dept >= 76 && dept <= 95) {
        return { delai: 3, zone: 'Sud/Ouest France', transporteur: 'Colissimo' };
    }
    if (dept >= 97) {
        return { delai: 7, zone: 'DOM-TOM', transporteur: 'Colissimo International' };
    }

    return { delai: 3, zone: 'France', transporteur: 'Colissimo' };
};

const calculerDateLivraison = (joursOuvres) => {
    const date = new Date();
    if (date.getHours() >= 14) {
        date.setDate(date.getDate() + 1);
    }

    let joursAjoutes = 0;
    while (joursAjoutes < joursOuvres) {
        date.setDate(date.getDate() + 1);
        const jour = date.getDay();
        if (jour !== 0 && jour !== 6) {
            joursAjoutes++;
        }
    }

    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const rechercherAdresse = async (req, res) => {
    const { q, limit = 5 } = req.query;

    if (!q || q.length < 3) {
        return res.status(400).json({ message: 'Requête trop courte (min 3 caractères)' });
    }

    try {
        const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=${limit}&countrycodes=fr`;
        const response = await fetch(url);
        const data = await response.json();

        const adresses = data.features.map(f => ({
            label: f.properties.label,
            rue: f.properties.name,
            code_postal: f.properties.postcode,
            ville: f.properties.city,
            departement: f.properties.context,
            coordonnees: {
                lat: f.geometry.coordinates[1],
                lon: f.geometry.coordinates[0]
            }
        }));

        res.json(adresses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de la recherche d\'adresse' });
    }
};

const estimerLivraison = async (req, res) => {
    const { code_postal, ville } = req.body;

    if (!code_postal) {
        return res.status(400).json({ message: 'code_postal requis' });
    }

    try {
        const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(ville || '')}+${code_postal}&postcode=${code_postal}&limit=1`;
        const response = await fetch(url);
        const data = await response.json();

        const adresseValide = data.features && data.features.length > 0;

        if (!adresseValide) {
            return res.status(404).json({ message: 'Code postal introuvable' });
        }

        const infosZone = getDelaiLivraison(code_postal);
        const dateEstimee = calculerDateLivraison(infosZone.delai);

        res.json({
            code_postal,
            ville: data.features[0]?.properties?.city || ville,
            zone: infosZone.zone,
            transporteur: infosZone.transporteur,
            delai_jours_ouvres: infosZone.delai,
            date_estimee: dateEstimee,
            frais_livraison: infosZone.delai <= 2 ? 4.99 : infosZone.delai <= 3 ? 6.99 : 14.99,
            livraison_gratuite_a_partir_de: 50.00
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de l\'estimation de livraison' });
    }
};

module.exports = { rechercherAdresse, estimerLivraison };
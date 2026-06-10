// Favoris / wishlist : 100% localStorage (pas d'endpoint API dédié)

const Wishlist = {
    KEY: 'yboost_wishlist',

    getIds() {
        const raw = localStorage.getItem(this.KEY);
        return raw ? JSON.parse(raw) : [];
    },

    has(id) {
        return this.getIds().includes(Number(id));
    },

    toggle(id) {
        id = Number(id);
        let ids = this.getIds();
        if (ids.includes(id)) {
            ids = ids.filter((x) => x !== id);
        } else {
            ids.push(id);
        }
        localStorage.setItem(this.KEY, JSON.stringify(ids));
        this.updateBadge();
        return ids.includes(id);
    },

    remove(id) {
        id = Number(id);
        const ids = this.getIds().filter((x) => x !== id);
        localStorage.setItem(this.KEY, JSON.stringify(ids));
        this.updateBadge();
    },

    updateBadge() {
        const badge = document.getElementById('wishlist-badge');
        if (!badge) return;
        const count = this.getIds().length;
        badge.textContent = String(count);
        badge.dataset.count = String(count);
    },
};
// Wrapper UI au-dessus de Auth : gestion des formulaires de connexion / inscription

function bindLoginForm(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errorEl = form.querySelector('.form-error');
        const submitBtn = form.querySelector('button[type="submit"]');
        errorEl.textContent = '';
        submitBtn.disabled = true;

        const result = await Auth.login({
            email: form.email.value.trim(),
            motDePasse: form.password.value,
        });

        submitBtn.disabled = false;
        if (result.ok) {
            window.location.href = 'compte.html';
        } else {
            errorEl.textContent = result.error;
        }
    });
}

function bindRegisterForm(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errorEl = form.querySelector('.form-error');
        const submitBtn = form.querySelector('button[type="submit"]');
        errorEl.textContent = '';
        submitBtn.disabled = true;

        const result = await Auth.register({
            email: form.email.value.trim(),
            motDePasse: form.password.value,
            prenom: form.prenom.value.trim(),
            nom: form.nom.value.trim(),
        });

        submitBtn.disabled = false;
        if (result.ok) {
            window.location.href = 'compte.html';
        } else {
            errorEl.textContent = result.error;
        }
    });
}
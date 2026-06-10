// Pages connexion / inscription / compte

document.addEventListener('DOMContentLoaded', async () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) bindLoginForm(loginForm);

    const registerForm = document.getElementById('register-form');
    if (registerForm) bindRegisterForm(registerForm);

    const loggedEl = document.getElementById('account-logged');
    const guestEl = document.getElementById('account-guest');
    if (!loggedEl || !guestEl) return;

    if (!Auth.isLoggedIn()) {
        guestEl.style.display = 'block';
        return;
    }

    const user = await Auth.me();
    if (!user) {
        Auth.logout();
        guestEl.style.display = 'block';
        return;
    }

    loggedEl.style.display = 'block';
    document.getElementById('account-name').textContent = `${user.prenom || ''} ${user.nom || ''}`.trim();
    document.getElementById('account-email').textContent = user.email || '';

    document.getElementById('logout-btn').addEventListener('click', () => {
        Auth.logout();
        window.location.href = 'index.html';
    });
});

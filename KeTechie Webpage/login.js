document.addEventListener('DOMContentLoaded', () => {
    const toggleToLogin = document.getElementById('toggle-to-login');
    const toggleToRegister = document.getElementById('toggle-to-register');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    toggleToLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    toggleToRegister.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
});
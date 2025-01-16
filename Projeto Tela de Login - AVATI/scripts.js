function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function handleLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    messageElement.textContent = '';
    messageElement.className = '';

    if (!email) {
        messageElement.textContent = 'O campo de e-mail não pode estar vazio.';
        messageElement.className = 'message error';
        return;
    }

    if (!validateEmail(email)) {
        messageElement.textContent = 'Por favor, insira um e-mail válido.';
        messageElement.className = 'message error';
        return;
    }

    if (!password) {
        messageElement.textContent = 'O campo de senha não pode estar vazio.';
        messageElement.className = 'message error';
        return;
    }

    if (password.length < 6) {
        messageElement.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        messageElement.className = 'message error';
        return;
    }

    messageElement.textContent = 'Login realizado com sucesso!';
    messageElement.className = 'message success';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', handleLogin);
});
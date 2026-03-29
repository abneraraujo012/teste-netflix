// script.js - Funcionalidade de alternância entre dark e light mode

// Função para alternar o modo
function toggleMode() {
    const body = document.body;
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Função para aplicar o modo salvo no localStorage
function applySavedMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

// Função para atualizar o ícone do botão
function updateToggleButtonIcon() {
    const toggleButton = document.getElementById('mode-toggle');
    if (!toggleButton) return;
    const isLightMode = document.body.classList.contains('light-mode');
    // ícone indica a ação que será feita ao clicar
    toggleButton.textContent = isLightMode ? '🌙' : '☀️';
    toggleButton.title = isLightMode ? 'Mudar para modo escuro' : 'Mudar para modo claro';
}

// Função para armazenar o perfil ativo no localStorage
function storeActiveProfile(event) {
    const link = event.currentTarget;
    const img = link.querySelector('img');
    const name = link.querySelector('p').textContent;
    const imageSrc = img.getAttribute('src'); // Usa getAttribute para obter o caminho relativo

    localStorage.setItem('activeProfileName', name);
    localStorage.setItem('activeProfileImage', imageSrc);
}

// Adicionar event listener ao botão quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            toggleMode();
            updateToggleButtonIcon();
        });
    }
    applySavedMode();
    updateToggleButtonIcon();

    // Adicionar event listeners aos links dos perfis
    const profileLinks = document.querySelectorAll('.profile a');
    profileLinks.forEach(link => {
        link.addEventListener('click', storeActiveProfile);
    });
});
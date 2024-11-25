// Seleciona o botão e o corpo do documento
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Carrega o tema salvo no localStorage (se houver)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleIcon(savedTheme);
}

// Alterna o tema claro/escuro
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark');
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Salva a preferência no localStorage
    updateToggleIcon(theme);
});

// Atualiza o ícone do botão com base no tema
function updateToggleIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

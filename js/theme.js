export const darkTheme = () => {
    const changeThemeCheck = document.getElementById('theme_dark');
    const changeThemeIcon = document.getElementById('theme_icon');

    const storageTheme = localStorage.getItem('tema') || 'light';
    applyTheme(storageTheme);

    changeThemeCheck.checked = storageTheme === 'dark';
    putIcon(storageTheme);

    changeThemeCheck.addEventListener('change', () => {
        const newTheme = changeThemeCheck.checked ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    function applyTheme(tema) {
        document.documentElement.setAttribute('data-theme', tema);
        localStorage.setItem('tema', tema);
        putIcon(tema);
    }

    function putIcon(tema) {
        changeThemeIcon.textContent = tema === 'dark' ? '☀️' : '🌙';
    }
};

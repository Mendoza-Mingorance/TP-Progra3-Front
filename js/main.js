import { darkTheme } from './theme.js';
import { welcomeFunction } from './welcome.js';

const init = () => {
    console.log('Inicializa las funciones');
    darkTheme();

    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path.endsWith('index')) {
        welcomeFunction();
    }
};
init();

import { updateCartCount } from "./components/cart.js";
import { fetchAndShowProducts, initProducts, renderDropdownCategories, showNameCustomer, showProducts } from "./components/products.js";
import { welcomeFunction } from "./components/welcome.js";
import { categoriesData, /*productsData*/ } from "./data/data.js";
import { getDataLocalStorage } from "./utils/localstorage.js";
import { darkTheme } from "./utils/theme.js";


const init = () => {
    console.log('Inicializa las funciones');
    darkTheme();
    
    const path = window.location.pathname;
    const customerName = getDataLocalStorage('customerName');

    if (path.includes('index.html') || path === '/' || path.endsWith('index')) {
        welcomeFunction();
    }
    if (path.includes('products.html')) {
        showNameCustomer(customerName);
        renderDropdownCategories(categoriesData);
        fetchAndShowProducts();
        // showProducts(productsData)
        initProducts()
        updateCartCount()
    }
};

document.addEventListener('DOMContentLoaded', init);

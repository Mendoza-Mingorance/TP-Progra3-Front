import { getCart, showCart, updateCartCount } from "./components/cart.js";
import { fetchProducts, initProducts, renderDropdownCategories, showNameCustomer, showProducts } from "./components/products.js";
import { welcomeFunction } from "./components/welcome.js";
import { categoriesData } from "./data/data.js";
import { getDataLocalStorage } from "./utils/localstorage.js";
import { darkTheme } from "./utils/theme.js";

const init = async () => {
    console.log('Inicializa las funciones');

    darkTheme();

    const customerName = getDataLocalStorage('customerName');
    showNameCustomer(customerName);

    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/' || path.endsWith('index')) {
        welcomeFunction();
    }
    
    if (path.includes('products.html')) {
        const products = await fetchProducts();
        renderDropdownCategories(categoriesData);
        showProducts(products);
        initProducts();
        updateCartCount();
    }

    if (path.includes('cart.html')) {
        updateCartCount();
        showCart(getCart()); 
    }
};

init();

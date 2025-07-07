import { getCart, showCart, updateCartCount } from "./components/cart.js";
import { confirmPurchase, showCheckout } from "./components/checkout.js";
import { fetchProducts, initProducts, logout, renderDropdownCategories, showNameCustomer, showProducts } from "./components/products.js";
import { welcomeFunction } from "./components/welcome.js";
import { categoriesData } from "./data/data.js";
import { getDataLocalStorage } from "./utils/localstorage.js";
import { darkTheme } from "./utils/theme.js";

const init = async () => {
    console.log('Inicializa las funciones');

    darkTheme();
    const customerName = getDataLocalStorage('customerName');
    showNameCustomer(customerName);
    updateCartCount();
    logout();

    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/' || path.endsWith('index')) {
        welcomeFunction();
    }
    
    if (path.includes('products.html')) {
        const products = await fetchProducts();
        renderDropdownCategories(categoriesData);
        showProducts(products);
        initProducts();
        
    }

    if (path.includes('cart.html')) {
        showCart(getCart()); 
    }

    if (path.includes('checkout.html')) {
        showCheckout(getCart());
        confirmPurchase(customerName, getCart());
    }
};

init();

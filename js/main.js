import { getCart, openCart, showCart, updateCartCount } from "./components/cart.js";
import { confirmPurchase, showCheckout } from "./components/checkout.js";
import { fetchCategories, fetchProducts, initProducts, logout, renderDropdownCategories, searchProducts, showNameCustomer, showProducts } from "./components/products.js";
import { welcomeFunction } from "./components/welcome.js";
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
        const categories = await fetchCategories();
        renderDropdownCategories(categories);
        showProducts(products);
        openCart();
        searchProducts(products);
        initProducts();
        
    }

    if (path.includes('cart.html')) {
        openCart();
        showCart(getCart()); 
    }

    if (path.includes('checkout.html')) {
        openCart();
        showCheckout(getCart());
        confirmPurchase(customerName, getCart());
    }
};

init();

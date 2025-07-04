import { productsData } from '../data/data.js';
import { getDataLocalStorage, uploadDataLocalStorage } from '../utils/localstorage.js';
import { showToast } from '../utils/toast.js';

let cart = getDataLocalStorage('cart') || [];

export function addProductToCart(id) {
    let product = productsData.find(p => p.id === id);

    if (!product) {
        showToast('El producto no puede agregarse', 'error');
        return;
    }

    let productInCart = cart.find(p => p.id === id);

    if (!productInCart) {
        let newProduct = {
            ...product, //Agrego todo lo que tengo en cada frutas
            quantity: 1, //Y le agrega la cantidad
        };
        cart.push(newProduct);
    } else {
        productInCart.quantity++;
    }
    uploadDataLocalStorage('cart', cart);
    showToast(`Producto ${product.name} agregado al carrito`, 'success');
    updateCartCount();
    console.log(cart);
}

export function updateCartCount() {
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    let counterCart = document.getElementById('cart-count');
    if (counterCart) {
        counterCart.textContent = count;
    }
}

export function getCart() {
    return cart;
}

export function clearCart() {
    cart = [];
    uploadDataLocalStorage('cart', cart);
    updateCartCount();
}

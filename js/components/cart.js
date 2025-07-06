// import { productsData } from '../data/data.js';
import { fetchAllProducts } from './products.js';
import { getDataLocalStorage, uploadDataLocalStorage } from '../utils/localstorage.js';
import { showToast } from '../utils/toast.js';

let cart = getDataLocalStorage('cart') || [];
const API_URL = 'http://localhost:8080';
export async function addProductToCart(id) {
    const products = await fetchAllProducts()
    const product = products.find(p => p.id === id);

    if (!product) {
        showToast('El producto no puede agregarse', 'error');
        return;
    }

    let productInCart = cart.find(p => p.id === id);

    if (!productInCart) {
        let newProduct = {
            ...product, 
            quantity: 1, 
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

export function showCart(cart) {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalContainer = document.querySelector('.cart-total');

    if (!cartItemsContainer || !cartTotalContainer) return;

    cartItemsContainer.innerHTML = '';
    cartTotalContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío 🛒</p>';
        return;
    }

    let total = 0;

    cart.forEach(product => {
        const subtotal = Number(product.price) * product.quantity;
        total += subtotal;

        const productEl = document.createElement('div');
        productEl.classList.add('cart-item');

        productEl.innerHTML = `
            <img src="${API_URL}/uploads/${product.url_image}" alt="${product.name}" class="cart-item-image" />
            <div class="cart-item-details">
                <h3>${product.name}</h3>
                <p>Precio por unidad: $${Number(product.price).toFixed(2)}</p>
                <p>Cantidad: ${product.quantity}</p>
                <p>Subtotal: $${subtotal.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.appendChild(productEl);
    });

    cartTotalContainer.innerHTML = `
        <h3>Total de la compra: $${total.toFixed(2)}</h3>
        <div class="cart-buttons">
            <button class="clear-cart-btn">Vaciar carrito</button>
            <button class="buy-btn">Comprar</button>
        </div>
    `;

    const clearBtn = cartTotalContainer.querySelector('.clear-cart-btn');
    clearBtn.addEventListener('click', () => {
        clearCart();
        showCart(getCart());
        showToast('Carrito vaciado', 'info');
    });
}


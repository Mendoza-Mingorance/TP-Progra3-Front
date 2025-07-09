import { API_URL } from '../../config/config.js';
import { addProductToCart } from './cart.js';

export function showNameCustomer(name) {
    let navbarDiv = document.querySelector('.header-customer-name');
    if (navbarDiv) {
        navbarDiv.innerHTML = `
        <p>Hola, <strong>${name}</strong></p>
        `;
    }
}

export async function fetchCategories(){
    try {
        const res = await fetch(`${API_URL}/api/categories`);
        const categories = await res.json();
        return categories
        
    } catch (error) {
        console.error('Error trayendo categorias:', error.message);
        
    }
}

export function renderDropdownCategories(categories) {
    const select = document.getElementById('categorySelect');
    if (!select) return;

    select.innerHTML = '<option value="">-- Selecciona categoría --</option>';

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        select.appendChild(option);
    });
}

// export async function fetchAllProducts() {
//     try {
//         const res = await fetch(`${API_URL}/api/products`);
//         const products = await res.json();
//         return products.data;
//     } catch (err) {
//         console.error('Error trayendo productos:', err.message);
//     }
// }

// export async function fetchProducts() {
//     const category = document.getElementById('categorySelect').value;
//     const minPrice = document.getElementById('minPrice').value;
//     const maxPrice = document.getElementById('maxPrice').value;
//     const sort = document.getElementById('sortSelect').value;
//     const order = document.getElementById('orderSelect').value;

//     const queryParams = new URLSearchParams();
//     queryParams.append('available', 'active');
//     if (category) queryParams.append('id_category', category);
//     if (minPrice) queryParams.append('minPrice', minPrice);
//     if (maxPrice) queryParams.append('maxPrice', maxPrice);
//     if (sort) queryParams.append('sort', sort);
//     if (order) queryParams.append('order', order);

//     const url = `${API_URL}/api/products?${queryParams.toString()}`;
//     console.log(url);
    
//     try {
//         const res = await fetch(url);
//         const products = await res.json();
//         console.log(products);
//         console.log(products.data);
        
//         return products.data
//     } catch (err) {
//         console.error('Error:', err.message);
//     }
// }

export async function fetchProducts() {
    try {
        const res = await fetch(`${API_URL}/api/products`);
        const products = await res.json();
        return products.data
    } catch (error) {
        console.error('Error trayendo productos:', error.message); 
    }
}
function showProducts(arr) {
    let container = document.querySelector('.container-products');

    if (!arr.length) {
        container.innerHTML = `<p>No hay productos para esta categoría.</p>`;
        return;
    }

    container.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i]; 

        let listProducts = document.createElement('div');
        listProducts.className = 'card-product';
        listProducts.innerHTML = `
            <img src="${API_URL}/uploads/${p.url_image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p><i class="fas fa-dollar-sign"></i> ${p.price}</p>
            <p><i class="fas fa-tag"></i> ${p.category_name}</p>
            <button class="btn btn-add-to-cart">
            <i class="fas fa-cart-plus"></i>
            </button>
        `;

        const addButton = listProducts.querySelector('.btn-add-to-cart');
        addButton.addEventListener('click', () => addProductToCart(p.id));
        container.appendChild(listProducts);
    }
}

function filterByCategory(products, category) {
    if (!category) return products;
    return products.filter(p => p.category_name === category);
}

function sortByPrice(products, order) {
    if (!order) return products;

    const sorted = [...products];

    if (order === 'asc') {
        sorted.sort((a, b) => a.price - b.price);
    } else {
        sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
}

export function initProducts(productsData) {
    const categorySelect = document.getElementById('categorySelect');
    const orderSelect = document.getElementById('orderSelect');

    let currentCategory = null;
    let currentOrder = null;

    function renderProducts() {
        const filtered = filterByCategory(productsData, currentCategory);
        const sorted = sortByPrice(filtered, currentOrder);
        showProducts(sorted);
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderProducts();
        });
    }

    if (orderSelect) {
        orderSelect.addEventListener('change', (e) => {
            currentOrder = e.target.value;
            renderProducts();
        });
    }

    renderProducts();
}

const searchInput = document.getElementById("searchInput");
export const searchProducts = (productsData) => {
    searchInput.addEventListener("keyup", () => {
        const query = searchInput.value.trim().toLowerCase();
        const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(query));
        showProducts(filteredProducts);
    });
} 



export function logout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('cart');
            localStorage.removeItem('customerName');
            window.location.href = '/index.html';
        });
    }    
}

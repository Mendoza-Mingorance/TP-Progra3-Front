import { categoriesData, productsData } from '../data/data.js';
import { showToast } from '../utils/toast.js';
import { addProductToCart } from './cart.js';

export function showNameCustomer(name) {
    let navbarDiv = document.querySelector('.header-customer-name');
    if (navbarDiv) {
        navbarDiv.innerHTML = `
        <p>Hola, <strong>${name}</strong></p>
        `;
    }
}

export function renderDropdownCategories(categories) {
    const select = document.getElementById('categorySelect');
    if (!select) return;

    select.innerHTML = '<option value="">-- Selecciona categoría --</option>';

    categories.forEach(c => {
        const option = document.createElement('option');
        option.value = c.id;
        option.textContent = c.name;
        select.appendChild(option);
    });
}

// async function fetchAndShowProducts() {
//     const category = document.getElementById('categorySelect').value;
//     const minPrice = document.getElementById('minPrice').value;
//     const maxPrice = document.getElementById('maxPrice').value;
//     const sort = document.getElementById('sortSelect').value;
//     const order = document.getElementById('orderSelect').value;

//     const queryParams = new URLSearchParams();

//     if (category) queryParams.append('id_category', category);
//     if (minPrice) queryParams.append('minPrice', minPrice);
//     if (maxPrice) queryParams.append('maxPrice', maxPrice);
//     if (sort) queryParams.append('sort', sort);
//     if (order) queryParams.append('order', order);

//     const url = `/products?${queryParams.toString()}`;

//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         showProducts(data);
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }

export function showProducts(arr) {
    let container = document.querySelector('.container-products');

    if (!arr.length) {
        container.innerHTML = `<p>No hay productos para esta categoría.</p>`;
        return;
    }

    container.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        let categories = categoriesData.find(c => c.id === p.id_category);
        let categoryName = categories ? categories.name : 'Sin Categoria';

        let listProducts = document.createElement('div');
        listProducts.className = 'card-product';
        listProducts.innerHTML = `
            <img src="${p.url_image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p><i class="fas fa-dollar-sign"></i> ${p.price}</p>
            <p><i class="fas fa-tag"></i> ${categoryName}</p>
            <button class="btn btn-add-to-cart">
            <i class="fas fa-cart-plus"></i>
            </button>
        `;

        const addButton = listProducts.querySelector('.btn-add-to-cart');
        addButton.addEventListener('click', () => addProductToCart(p.id));
        container.appendChild(listProducts);
    }
}

export function initProducts() {
    const categorySelect = document.getElementById('categorySelect');

    if (categorySelect) {
        categorySelect.addEventListener('change', function () {
            const selectedId = Number(this.value);
            if (selectedId) {
                const productosFiltrados = productsData.filter(p => p.id_category === selectedId);
                showProducts(productosFiltrados);
            } else {
                showProducts(productsData);
            }
        });
    }
}

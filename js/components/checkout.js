export const showCheckout = (cart) => {
    const productContainer = document.getElementById('product-summary');
    const totalPriceEl = document.getElementById('total-price');

    let total = 0;
    productContainer.innerHTML = `
        <div class="checkout-header">
            <span><strong>Producto</strong></span>
            <span><strong>Cantidad</strong></span>
            <span><strong>Precio Unitario</strong></span>
            <span><strong>Subtotal</strong></span>
        </div>
    `;

    cart.forEach(p => {
        const subtotal = p.price * p.quantity;
        total += subtotal;

        const productHTML = `
            <div class="checkout-item">
                <span>${p.name}</span>
                <span>${p.quantity}</span>
                <span>$${p.price}</span>
                <span>$${subtotal}</span>
            </div>
        `;

        productContainer.innerHTML += productHTML;
    });

    totalPriceEl.innerHTML = `<span>Total: $${total.toFixed(2)}</span>`;
};

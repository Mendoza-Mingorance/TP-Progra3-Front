import { API_URL } from "../../config/config.js";

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

export function confirmPurchase(customerName, cart) {
    const confirmPurchaseBtn = document.getElementById('confirmPurchase');
    if (!confirmPurchaseBtn) return;

    confirmPurchaseBtn.addEventListener('click', async () => {
    
        const paymentMethod = document.getElementById('paymentMethod').value;
        console.log(paymentMethod);
    
        try {
            const res = await fetch(`${API_URL}/api/sales`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: customerName,
                    payment_method: paymentMethod,
                    products: cart
                })
            });
    
            const saleData = await res.json();
            
            if (res.ok) {
                console.log('Venta confirmada:', saleData);
                localStorage.removeItem('cart');
                
                const modal = document.getElementById('modal-confirmation');
                const ticketText = document.getElementById('ticket-number');
                const finishBtn = document.getElementById('finish-btn');

                ticketText.textContent = `Número de ticket: ${saleData.ticket}`;
                modal.classList.remove('hidden');

                finishBtn.addEventListener('click', () => {
                    localStorage.removeItem('customerName');
                    window.location.href = '/index.html';
                });

            } else {
                throw new Error(saleData.message || 'Error al procesar la venta');
            }
        } catch (error) {
            console.error('Error al confirmar la compra:', error);
            alert('Ocurrió un error al confirmar la compra');
        }
    });
}



import { uploadDataLocalStorage } from '../utils/localstorage.js';
import { showToast } from '../utils/toast.js';

const formWelcome = document.getElementById('welcome-form');
const customerName = document.getElementById('customer-name');

export const welcomeFunction = () => {
    if (localStorage.getItem('customerName')) {
        window.location.href = './products.html';
    }

    if (formWelcome && customerName) {
        formWelcome.addEventListener('submit', e => handleCustomerNameSubmit(e, customerName));
        customerName.addEventListener('input', () => validateNameInput(customerName, formWelcome));
        validateNameInput(customerName, formWelcome);
    }

    function validateNameInput(input, form) {
        const value = input.value.trim();
        const submitBtn = form.querySelector('button[type="submit"]');

        if (value.length >= 3) {
            input.style.borderColor = 'var(--success-color)';
            submitBtn.disabled = false;
        } else {
            input.style.borderColor = 'var(--border-color)';
            submitBtn.disabled = true;
        }
    }

    function handleCustomerNameSubmit(e, input) {
        e.preventDefault();
        const name = input.value.trim();
        const form = e.target;

        if (name.length < 3) return showToast('Nombre minimo de 3 caracteres', 'error', form);
        if (name.length >= 20) return showToast('Nombre demasiado largo', 'error', form);

        uploadDataLocalStorage('customerName', name);
        showToast(`¡Bienvenido/a ${name}`, 'success', form);

        setTimeout(() => (window.location.href = './products.html'), 5000);
    }
};

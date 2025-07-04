export const showToast = (msj, type, parentElement = document.body) => {
    const existingToast = document.querySelectorAll('.custom-toast');
    existingToast.forEach(toast => toast.remove());

    const divToast = document.createElement('div');
    divToast.className = `custom-toast ${type}`;
    divToast.innerHTML = `<i class="fas fa-${
        type === 'error' ? 'exclamation-triangle' : 'check-circle'
    }"></i><span>${msj}</span>`;

    divToast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding:1rem;
    border-radius: 4px;
    font-weight:600;
    box-shadow: var(--shadow-lg);
    z-index:1000;
    animation: fadeIn 0.3s ease-in-out;
    ${
        type === 'error'
            ? 'background-color:rgba(254, 202, 202, 0.79); border: 1px solid #fecaca; color: #dc2626;'
            : 'background-color:rgba(187, 247, 208, 0.79); border: 1px solid #bbf7d0; color: #16a34a;'
    }
    `;

    parentElement.appendChild(divToast);
    setTimeout(() => {
        divToast.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => divToast.remove(), 300);
    }, 5000);

    // Opcional: Permitir cerrar haciendo click
    divToast.addEventListener('click', () => {
        divToast.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => divToast.remove(), 300);
    });
};

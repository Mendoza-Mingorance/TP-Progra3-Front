export const showToast = (msj, type, form) => {
    const classMsj = document.querySelector('.welcome-msj');
    if (classMsj) classMsj.remove();

    const divToast = document.createElement('div');
    divToast.className = `welcome-msj ${type}`;
    divToast.innerHTML = `<i class="fas fa-${
        type === 'error' ? 'exclamation-triangle' : 'check-circle'
    }"></i><span>${msj}</span>`;
    divToast.style.cssText = `
    display:flex;
    align-items: center;
    gap:0.5rem;
    padding:1rem;
    border-radius: 4px;
    margin-top:1rem;
    font-weight:600;
    ${
        type === 'error'
            ? 'background-color:rgba(254, 202, 202, 0.79); border: 1px solid #fecaca; color: #dc2626;'
            : 'background-color:rgba(187, 247, 208, 0.79); border: 1px solid #bbf7d0; color: #16a34a;'
    }
    `;

    form.appendChild(divToast);
    setTimeout(() => divToast.remove(), 5000);
};

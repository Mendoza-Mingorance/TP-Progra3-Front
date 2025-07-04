export function uploadDataLocalStorage(arrLocal, arrData) {
    localStorage.setItem(arrLocal, JSON.stringify(arrData));
}

export function getDataLocalStorage(arrLocal) {
    let items = localStorage.getItem(arrLocal);
    return items ? JSON.parse(items) : [];
}
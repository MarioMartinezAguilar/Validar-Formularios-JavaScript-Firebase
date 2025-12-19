const modificarFecha = () => {
    const fecha = new Date();
    document.querySelector('#fecha').textContent = fecha.getFullYear();
}
window.addEventListener('load', modificarFecha);
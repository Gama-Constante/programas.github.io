function mostrar(ruta) {
    document.getElementById('contenido').innerHTML = `
        <iframe src="${ruta}" title="Programa"></iframe>
    `;
}

function inicio() {
    document.getElementById('contenido').innerHTML = `
        <h2>¡Bienvenido!</h2>
        <p>Has regresado a la página de inicio. Selecciona un programa para continuar.</p>
    `;
}

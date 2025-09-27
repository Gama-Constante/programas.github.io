// 🔹 Validar que en ID solo entren letras y números
document.getElementById("idEmpleado").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, "");
});

// 🔹 Nombre: primera letra mayúscula, demás minúsculas
document.getElementById("nombre").addEventListener("input", function () {
    this.value = this.value
        .toLowerCase()
        .replace(/\b\w/g, function (letra) {
            return letra.toUpperCase();
        });
});

function calcularNomina() {
    let horas = document.getElementById("horas").value;
    let costo = document.getElementById("costo").value;

    let horasNormales = horas <= 40 ? horas : 40;
    let horasExtras = horas > 40 ? horas - 40 : 0;
    let subtotal = (horasNormales * costo) + (horasExtras * costo * 2);
    let ispt = subtotal * 0.10;
    let monto = subtotal - ispt;

    document.getElementById("horasNormales").value = "$" + horasNormales;
    document.getElementById("horasExtras").value = "$" + horasExtras;
    document.getElementById("subtotal").value = "$" + subtotal.toFixed(2);
    document.getElementById("ispt").value = "$" + ispt.toFixed(2);
    document.getElementById("monto").value = "$" + monto.toFixed(2);
}

function limpiar() {
    document.getElementById("idEmpleado").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("costo").value = "";
    document.getElementById("horasNormales").value = "";
    document.getElementById("horasExtras").value = "";
    document.getElementById("subtotal").value = "";
    document.getElementById("ispt").value = "";
    document.getElementById("monto").value = "";
}

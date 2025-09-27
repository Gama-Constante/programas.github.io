 
        function operar(operacion) {
            let num1 = document.getElementById("numero1").value;
            let num2 = document.getElementById("numero2").value;

            if (num1 === "" || (num2 === "" && operacion !== '^')) {
                alert("Por favor ingrese los números necesarios");
                return;
            }

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let resultado;

            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        alert("No se puede dividir entre 0");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                case '^':
                    resultado = num1 * num1;
                    break;
                default:
                    alert("Operación no válida");
                    return;
            }

            document.getElementById("resultado").value = resultado;
        }

        function limpiar() {
            document.getElementById("numero1").value = "";
            document.getElementById("numero2").value = "";
            document.getElementById("resultado").value = "";
        }

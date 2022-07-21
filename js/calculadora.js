var hayResultado = false;

function concatenaOperacion(valor) {


    if (hayResultado) {
        document.calculator.res.value = "";
        document.calculator.ans.value = "";
        hayResultado = false;
    }


    let digito = parseInt(valor);
    if (isNaN(digito)) {
        document.calculator.res.value = "";
    }
    else {
        document.calculator.res.value += valor;
    }

    document.calculator.ans.value += valor;

}


function ejecutaExprecion() {
    try {
        document.calculator.res.value = eval(document.calculator.ans.value);
        hayResultado = true;
    } catch (error) {
        alert('Error al calcular Exprecion ' + error);
    }

}

function funcionesEspeciales(tipo) {


    try {

        switch (tipo) {
            case 'P':
                document.calculator.ans.value = "Potencia  2( " + document.calculator.res.value + ")";
                document.calculator.res.value = Math.pow(document.calculator.res.value, 2);

                break;
            case 'R':
                document.calculator.ans.value = "Raiz  2( " + document.calculator.res.value + ")";
                document.calculator.res.value = Math.sqrt(document.calculator.res.value);

                break;
            case 'L':
                document.calculator.ans.value = "logaritmo  2( " + document.calculator.res.value + ")";
                document.calculator.res.value = Math.log2(document.calculator.res.value);

                break;

        }







        hayResultado = true;
    } catch (error) {
        alert('Error al calcular Exprecion ' + error);
    }

}

function registrarMemoriaLocal() {

    if (typeof (Storage) !== "undefined") {
        if (hayResultado) {
            let valor = document.calculator.ans.value + "=" + document.calculator.res.value;

            var arreglo = new Array();
            var memregistro = JSON.parse(localStorage.getItem("Exp"));

            if (memregistro == null) {
                arreglo[0] = valor;


            }
            else {
                arreglo = memregistro;
                arreglo[arreglo.length] = valor;

            }

            localStorage.setItem("Exp", JSON.stringify(arreglo));
            let mem = document.getElementById("mem");

            mem.innerHTML += "<option>" + valor + "</option>";

        }
    }

}

function cargaMemoria() {

    if (typeof (Storage) !== "undefined") {
        var memregistro = JSON.parse(localStorage.getItem("Exp"));
        if (memregistro != null) {
            let mem = document.getElementById("mem");
            for (let index = 0; index < memregistro.length; index++) {

                mem.innerHTML += "<option>" + memregistro[index] + "</option>";
            }

        }



    }

}
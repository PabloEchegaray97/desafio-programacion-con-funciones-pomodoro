let cantP=6, tiempoP=20, intervaloLargo=3, desCorto=5, desLargo=10;

let opcion=prompt("¿Desea dejar los valores por defecto?\n1. Si\n2. No\n*Valores por defecto:\nCantidad de pomodoros: " + cantP +"\nDuracion: " + tiempoP +" minutos\nDescanso: " + desCorto + " minutos\nDescanso largo (despues de " + intervaloLargo +" pomodoros): " + desLargo + " minutos"); //si op =2 el usuario va a ingresar los datos manualmente

function mostrar_datos() {
    if (intervaloLargo>1) {
        alert ("Cantidad de pomodoros: "+ cantP + "\nDuracion (minutos): " + tiempoP + "\nDescanso (minutos): " + desCorto +"\nDescanso largo (despues de " + intervaloLargo + " pomodoros) (minutos) : " + desLargo)
    }
    else {
        alert ("Cantidad de pomodoros: "+ cantP + "\nDuracion (minutos): " + tiempoP + "\nDescanso (minutos): " + desCorto +"\nDescanso largo (despues de " + intervaloLargo + " pomodoro) (minutos) : " + desLargo)
    }
}

function ingresar_datos() { // al ingresar los datos estos se comparan y en caso de ser incorrectos se vuelven a ingresar
    do {
        cantP=parseInt(prompt("Ingrese la cantidad de pomodoros que desea realizar:"));
        if (cantP<1 || isNaN(cantP)==true) {
            alert("Ingresa un valor valido por favor. Ej: 3")
            continue;
        }

        tiempoP=parseInt(prompt("Ingrese el tiempo de cada pomodoro en minutos:"));
        if (tiempoP<1 || isNaN(tiempoP)==true) {
            alert("Ingresa un valor valido por favor. No puede ser menor a 1 minuto");
            continue;
        }

        intervaloLargo=parseInt(prompt ("Determine cada cuantos pomodoros tendrá un descanso largo:"));
        if (intervaloLargo<1 || isNaN(intervaloLargo)==true) {
            alert("Ingresa un valor valido por favor.")
            continue;
        }

        desCorto=parseInt(prompt("Determine el tiempo de los descansos en minutos:"));
        if (desCorto<1 || isNaN(desCorto)==true) {
            alert("Ingresa un valor valido por favor. No puede ser menor a 1 minuto")
            continue;
        }

        desLargo=parseInt(prompt("Determine el tiempo de los descansos largos:"));
        if (desLargo<1 || isNaN(desLargo)==true) {
            alert("Ingresa un valor valido por favor. No puede ser menor a 1 minuto")
            continue;
        }
    } while (cantP<1 || tiempoP<1 || intervaloLargo<1 || desCorto<1 || desLargo<1 || isNaN(cantP)==true || isNaN(tiempoP)==true || isNaN(intervaloLargo)==true || isNaN(desCorto)==true || isNaN(desLargo)==true);
}
if (opcion!="1") {
    ingresar_datos();
}
mostrar_datos();

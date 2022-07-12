<<<<<<< HEAD
let cantP=6, tiempoP=20, intervaloLargo=3, desCorto=5, desLargo=10;

let opcion=prompt("¿Desea dejar los valores por defecto?\n<1>. Si\n<Cualquier tecla>. No\n*Valores por defecto:\nCantidad de pomodoros: " + cantP +"\nDuracion: " + tiempoP +" minutos\nDescanso: " + desCorto + " minutos\nDescanso largo (despues de " + intervaloLargo +" pomodoros): " + desLargo + " minutos"); //si op =2 el usuario va a ingresar los datos manualmente

function mostrar_datos() {
    if (intervaloLargo>1) {
        alert ("Cantidad de pomodoros: "+ cantP + "\nDuracion (minutos): " + tiempoP + "\nDescanso (minutos): " + desCorto +"\nDescanso largo (despues de " + intervaloLargo + " pomodoros) (minutos) : " + desLargo)
=======
let duracion;
let tiempo;
let descansos;
let desc=false; //indica si se esta descansando o no
let inicio2;
function init_desc() { // se inicializa cuando se termina el tiempo del pomodoro
    clearInterval(inicio); //limpiamos la variable, terminando asi con el intervalo que llamaba a la funcion act_temporizador
    console.log("Inicio descanso");
    tiempo = descansos * 60; // cambiar el valor de tiempo de manera global
    inicio2= setInterval(act_temporizador,1000); // guardar en variable el intervalo para luego limpiarla cuando se termine el descanso
    desc=true; // indica si se esta descansando
}
function act_temporizador() {
    let minutos = Math.floor(tiempo / 60); // devuelve el maximo entero 
    let segundos = tiempo % 60; // calculamos los segundos mediante el resto del tiempo total
    if (segundos < 10) { //si los segundos son <10 agregar un 0 delante
        segundos = "0" + segundos;
    }
    console.log(minutos + ":" + segundos);
    if (tiempo==0 && desc==false) { //si se acaba el tiempo y no se esta descansando, iniciar descanso
        init_desc();
>>>>>>> temporizador
    }
    else {
        tiempo--; //restar 1 del tiempo total
        if (desc==true  && minutos==0 && segundos==0) { //si se esta descansando y se acabaron los minutos y segundos
            clearInterval(inicio2); //limpiamos la variable, terminando asi con el intervalo queu llamaba a la funcion act_temporizador
            console.log("Fin descanso");
        }
    }
}
do {
    duracion = prompt("Ingrese la duracion que tendran los pomodoros:"); //minutos que le pasaremos al programa
    descansos= prompt("Ingrese la duracion de los descansos:");
    if (duracion <= 0 || isNaN(duracion) || descansos<=0 || isNaN(descansos)) {
        console.log("Ingresar una duracion valida.")
    }
    

} while (duracion < 1 || isNaN(duracion) == true || descansos<1 || isNaN(descansos));

tiempo = duracion * 60; //convertimos todo a segundos 

const inicio = setInterval(act_temporizador, 1000); // ejecutar la funcion act_temporizador cada un intervalo de 1000ms y guardarlo en la constante 'inicio' para luego limpiarla dependiendo la situacion
//Pruebas 1er ciclo
    // duracion = 2 (minutos)
    // tiempo = duracion * 2 -> = 120
    // llamar funcion cada un intervalo de 1000ms
    //en la funcion
        // minutos=tiempo/60 -> = 2 (la funcion math floor devuelve el max entero)
        // segundos = tiempo % 60 -> = 0 (el resto es 0 ya que duracion es igual a 120)
        // mostramos en consola el reloj -> 2:00
        // tiempo = tiempo -1 -> tiempo = 119
        // si tiempo=0 salimos del intervalo limpiando la variable (este no es el caso), seguimos ejecutando la funcion cada un intervalo de 1000ms
//Pruebas 2er ciclo
    // llamar funcion cada un intervalo de 1000ms
    //en la funcion
        // minutos=tiempo/60 -> = 1... (la funcion math floor devuelve el max entero) -> 1
        // segundos = tiempo % 60 -> = 59 (el resto es 59 ya que duracion es igual a 119)
        // mostramos en consola el reloj -> 1:59
        // tiempo = tiempo -1 -> tiempo = 118
        // si tiempo=0 salimos del intervalo limpiando la variable (este no es el caso), seguimos ejecutando la funcion cada un intervalo de 1000ms
//fin ciclo e inicio descanso
    //si tiempo =0 se limpia la variable y se inicializa otra con el tiempo correspondiente a 
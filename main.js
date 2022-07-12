let duracion;
let tiempo;
let descansos;
let desc=false;
let inicio2;
function init_desc() {
    clearInterval(inicio);
    console.log("Inicio descanso");
    tiempo = descansos * 60;
    inicio2= setInterval(act_temporizador,1000);
    desc=true;
}
function act_temporizador() {
    let minutos = Math.floor(tiempo / 60); // devuelve el maximo entero 
    let segundos = tiempo % 60; // calculamos los segundos mediante el resto del tiempo total
    if (segundos < 10) { //si los segundos son <10 agregar un 0 delante
        segundos = "0" + segundos;
    }
    console.log(minutos + ":" + segundos);
    if (tiempo==0 && desc==false) {
        init_desc();
    }
    else {
        tiempo--; //restar el tiempo total -> ej: 
        if (desc==true  && minutos==0 && segundos==0) {
            clearInterval(inicio2);
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
    // duracion = 2
    // tiempo = duracion * 2 -> = 120
    // llamar funcion cada un intervalo de 1000ms
    //en la funcion
        // minutos=tiempo/60 -> = 2 (la funcion math floor devuelve el max entero)
        // segundos = tiempo % 60 -> = 0 (el resto es 0 ya que duracion es igual a 120)
        // mostramos en consola el reloj -> 2:00
        // tiempo = tiempo -1 -> tiempo = 119
        // si m=0 & s=0 salimos del intervalo limpiando la variable (este no es el caso), seguimos ejecutando la funcion cada un intervalo de 1000ms
//Pruebas 2er ciclo
    // llamar funcion cada un intervalo de 1000ms
    //en la funcion
        // minutos=tiempo/60 -> = 1... (la funcion math floor devuelve el max entero) -> 1
        // segundos = tiempo % 60 -> = 59 (el resto es 59 ya que duracion es igual a 119)
        // mostramos en consola el reloj -> 1:59
        // tiempo = tiempo -1 -> tiempo = 118
        // si m=0 & s=0 salimos del intervalo limpiando la variable (este no es el caso), seguimos ejecutando la funcion cada un intervalo de 1000ms

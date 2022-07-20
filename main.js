let tiempo;
let desc=false; 
let intervalo;
const pomodoro = { duracion: 20, descansos: 5, ciclos:3 };
let contador=0;
function init_desc() { 

    clearInterval(intervalo);
    alert("Fin sesion");
    alert("Inicio descanso")
    tiempo = pomodoro.descansos * 60;
    console.log("Cuenta atras de: " + pomodoro.descansos + ":00");
    intervalo = setInterval(act_temporizador,10); 
    desc=true; 
}

function init_pom() {

    tiempo = pomodoro.duracion * 60;
    alert("Inicio de la sesión")
    console.log("Cuenta atras de: " + pomodoro.duracion + ":00");
    intervalo = setInterval(act_temporizador, 10);

}
function act_temporizador() {

    let temporizador=[];
    temporizador[0] = Math.floor(tiempo / 60); //minutos
    temporizador[1] = tiempo % 60; //segundos
    if (temporizador[1] < 10) { 
        temporizador[1] = "0" + temporizador[1];
    }

    console.log(temporizador[0] + ":" + temporizador[1]);

    if (tiempo==0 && desc==false) { 
        init_desc();
    }

    else {
        
        tiempo--; 
        if (desc==true  && temporizador[0]==0 && temporizador[1]==0) { 
            clearInterval(intervalo); 
            alert("Fin descanso");
            desc=false;
            contador++;
            console.log(contador);
            if(contador==pomodoro.ciclos) {
                return 0;
            } else {
                init_pom();
            }
        }
    }
}

do {

    pomodoro.duracion = prompt("Ingrese la duracion que tendran los pomodoros:"); 
    pomodoro.descansos= prompt("Ingrese la duracion de los descansos:");
    pomodoro.ciclos = prompt("Ingrese cuantos pomodoros desea realizar:");

    if (pomodoro.duracion <= 0 || isNaN(pomodoro.duracion) || pomodoro.descansos<=0 || isNaN(pomodoro.descansos) || isNaN(pomodoro.ciclos) || pomodoro.ciclos<=0) {
        console.log("Ingresar una duracion valida.")
    }
    

} while (pomodoro.duracion < 1 || isNaN(pomodoro.duracion) == true || pomodoro.descansos<1 || isNaN(pomodoro.descansos) || isNaN(pomodoro.ciclos) || pomodoro.ciclos<1);


init_pom();

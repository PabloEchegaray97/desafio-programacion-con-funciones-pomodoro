let tiempo;
let desc=false; 
let inicio2;
const pomodoro = { duracion: 20, descansos: 5 };
function init_desc() { 
    clearInterval(inicio);
    console.log("Fin sesión")
    console.log("Inicio descanso");
    tiempo = pomodoro.descansos * 60; 
    inicio2= setInterval(act_temporizador,10); 
    desc=true; 
}

function act_temporizador() {
    let temporizador=[];
    temporizador[0] = Math.floor(tiempo / 60);
    temporizador[1] = tiempo % 60;
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
            clearInterval(inicio2); 
            console.log("Fin descanso");
        }
    }
}

do {

    pomodoro.duracion = prompt("Ingrese la duracion que tendran los pomodoros:"); 
    pomodoro.descansos= prompt("Ingrese la duracion de los descansos:");

    if (pomodoro.duracion <= 0 || isNaN(pomodoro.duracion) || pomodoro.descansos<=0 || isNaN(pomodoro.descansos)) {
        console.log("Ingresar una duracion valida.")
    }
    

} while (pomodoro.duracion < 1 || isNaN(pomodoro.duracion) == true || pomodoro.descansos<1 || isNaN(pomodoro.descansos));

tiempo = pomodoro.duracion * 60;

const inicio = setInterval(act_temporizador, 10);
console.log("Inicio sesión");
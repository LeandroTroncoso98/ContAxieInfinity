// variables
const resultado = document.querySelector('#resultado');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector("#restar");
const siguiente = document.querySelector('#siguiente');
const deshacer = document.querySelector('#deshacer');
const reiniciar = document.querySelector('#reiniciar');
const ronda = document.querySelector('#ronda');
const sumarVictoria = document.querySelector('#sumarVictoria');
const victoriaContador = document.querySelector('#victoriaContador');
const restarVictoria = document.querySelector('#restarVictoria');
const sumarDerrota = document.querySelector('#sumarDerrota');
const derrotaContador = document.querySelector('#derrotaContador');
const restarDerrota = document.querySelector('#restarDerrota');
const sumarDraw = document.querySelector('#sumarDraw');
const drawContador = document.querySelector('#drawContador');
const restarDraw = document.querySelector('#restarDraw');
const promedio = document.querySelector('#promedio');



//Inicio de ronda
let round = 1;
let numero = 3;
resultado.innerHTML = numero;
ronda.innerHTML= round;
//Inicio de victoria
let numeroVictoria = 0;
victoriaContador.innerHTML = numeroVictoria;
let numeroDerrota = 0;
derrotaContador.innerHTML = numeroDerrota;
let numeroDraw = 0;
drawContador.innerHTML = numeroDraw;



// eventos Contador de energia
sumar.addEventListener('click', sumarPunto);
restar.addEventListener('click', restarPunto);
siguiente.addEventListener('click',nextRound);
deshacer.addEventListener('click', cancelRound)
reiniciar.addEventListener('click', reiniciarContador);
//eventos Victory meter
sumarVictoria.addEventListener('click', sumarVictory);
restarVictoria.addEventListener('click', restarVictory);
sumarDerrota.addEventListener('click', sumarDefeat, calcularProm);
restarDerrota.addEventListener('click', restarDefeat);
sumarDraw.addEventListener('click', sumarEmpate);
restarDraw.addEventListener('click', restarEmpate);
// Funciones
function reiniciarContador(){
    numero = 3;
    resultado.innerHTML = numero;
    round = 1;
    ronda.innerHTML = round;
}
function sumarPunto(){
    if(numero < 10){
        numero++;
        resultado.innerHTML = numero;
    }
}
function restarPunto(){
    if(numero == 0){
    }else{
        numero--;
        resultado.innerHTML=numero
    }
}
function nextRound(){
    round++;
    ronda.innerHTML=round;
    if(numero < 9){
        numero += 2;
        resultado.innerHTML=numero;
        
    }else if(numero <= 9){
        numero ++;
        resultado.innerHTML=numero;
    }

}
function cancelRound(){
    if(round == 0 && numero == 0){
    } else if(round == 1){
        reiniciarContador();
    } else if(round >= 2){
        round--;
        ronda.innerHTML = round;
        numero-=2;
        resultado.innerHTML = numero;
    }


}
function sumarVictory(){
    numeroVictoria++;
    victoriaContador.innerHTML = numeroVictoria
    calcularProm();
}
function restarVictory(){
    if(numeroVictoria == 0){
    } else{
        numeroVictoria--;
        victoriaContador.innerHTML = numeroVictoria;
        calcularProm();
    }
}
function sumarDefeat(){
    numeroDerrota++;
    derrotaContador.innerHTML = numeroDerrota;
    calcularProm();
}
function restarDefeat(){
    if(numeroDerrota == 0){
    }else{
        numeroDerrota--;
        derrotaContador.innerHTML = numeroDerrota;
        calcularProm();
    }
}
function sumarEmpate(){
    numeroDraw++;
    drawContador.innerHTML = numeroDraw;
    calcularProm();
}
function restarEmpate(){
    if(numeroDraw == 0){
    }else{
        numeroDraw--;
        drawContador.innerHTML = numeroDraw;
        calcularProm();
    }
}
function calcularProm(){
    if(numeroDerrota + numeroDraw + numeroVictoria == 0){
        let numeroPromedio = 0;
        promedio.innerHTML = numeroPromedio;
    }else {
        numeroPromedio = (100 * numeroVictoria) / (numeroDerrota + numeroVictoria + numeroDraw);
        promedio.innerHTML = parseInt( numeroPromedio);
    }

}

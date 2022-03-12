//Variables
let texto = document.getElementById('encriptar').value;
//Captura de boton encriptar
var btnEncriptar = document.querySelector(".boton-encriptar");
btnEncriptar.addEventListener('click',encriptar);

//input columna 2
let encriptado = document.querySelector('.texto-encriptado');

//Captura de boton encriptar
var btnEncriptar = document.querySelector(".boton-desencriptar");
btnEncriptar.addEventListener('click',desencriptar);

//Captura de boton copiar
var btncopiar = document.querySelector(".boton-copiar");
btncopiar.addEventListener('click',copiar);

//Captura input columna 1
let input1 = document.querySelector('#encriptar');
input1.addEventListener('blur',validar);


//Funciones
function encriptar (){
    let texto = document.getElementById('encriptar').value;
    texto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    encriptado.value = texto;
    
}

function desencriptar (){
    let texto = document.getElementById('encriptar').value;
    texto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    encriptado.value = texto;
    
}

function copiar (){
    var resultado = encriptado.value;
    navigator.clipboard.writeText(resultado);
   
   
}


function validar(e){
    if(e.target.value.length > 0 ){
        e.target.style.borderBottomColor = 'green';
    }else{
        e.target.style.borderBottomColor = 'red';
    }
}
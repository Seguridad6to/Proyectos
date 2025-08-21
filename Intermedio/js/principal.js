var suma=0;
let encabezado=document.getElementById("tibio");
let pillo=document.getElementById("imagenes");
let costal=document.getElementById("textos");
encabezado.addEventListener("click",cambiar);
//pillo.addEventListener("load",carrusel);
//costal.addEventListener("dblclick",bolsa);
function cambiar(){
    let a,b;
    a=9;
    b=18;
    encabezado.innerHTML="TIBIO";
    encabezado.style.color="cyan";
    suma=a+b;
    encabezado.innerHTML=suma;
}
function tamano(){
    pillo.style.width="40%";
    costal.style.width="20%";
}
function bolsa(){
    costal.style.backgroundColor="red";
    pillo.style.backgroundColor="green"
}
function carrusel(){
    imag=document.getElementById("ima");
    
}
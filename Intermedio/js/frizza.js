let paColor=document.getElementById("colorcito");
let paformu=document.getElementById("paraformu");
let avatar=document.getElementById("enviar");
var c;
function validar(entrada){
    if(entrada=="" || isNaN(entrada)){
        alert("Debe Ingresar un valor");
    }else if(entrada>100 && entrada<500){
        return true;
    }else{
        alert("El valor de a debe ser mayor a 100 y el de b menor que 500");
    }
}
paColor.addEventListener("change",(e)=>{
    paformu.style.backgroundColor=paColor.value;
});
avatar.addEventListener("click",(e)=>{
    let a=document.getElementById("base").value;
    let b=document.getElementById("opera").value;
    let c=document.getElementById("porcen");
    if(validar(a) && validar(b)){
        c.value=Number(b)+Number(a);
    }
/*   c.value=a+b;*/
});

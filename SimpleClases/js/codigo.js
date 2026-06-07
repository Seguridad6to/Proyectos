let nom=document.getElementById("nombre");
var a=0;
function cuenta(){
    a++;
    return a;
}
nom.addEventListener("dblclick",()=>{
    cuenta();
    if(a==1){
        nom.innerHTML="Le dije que no haga doble click";
        nom.style.color="red";
    }else if(a==2){
        nom.innerHTML="Usted no entiende???";
    }else if(a==3){
        nom.innerHTML="Es usted boludo????";

    }
    });
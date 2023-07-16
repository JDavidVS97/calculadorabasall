const FLUJO= document.getElementById("res1");
const FLUJO2= document.getElementById("res2");
const BOTON= document.getElementById("calcular")
const IMPUT= document.getElementById("peso")


BOTON.addEventListener("click",()=>{
    let peso= IMPUT.value;
    if(peso===''|| peso<=0 ){
        FLUJO.innerHTML="Peso invalido";
        FLUJO2.innerHTML="Ingrese otro valor";
    }else{
        if(peso<=30){
            FLUJO.innerHTML=holyday(peso).toFixed(2) + "cc/h";
            FLUJO.style.display="block";
            FLUJO2.innerHTML="m: " + (holyday(peso)+(holyday(peso)/2)).toFixed(2);
            FLUJO2.style.display="block";
        }else{
            FLUJO.innerHTML="Multiplicado por 1500: " + (superficieCorporal(peso)*1500).toFixed(4) + "cc";
            FLUJO.style.display="block";
            FLUJO2.innerHTML="Multiplicado por 2000: " + (superficieCorporal(peso)*2000).toFixed(4) + "cc";
            FLUJO2.style.display="block";


        }
    }
})

function holyday(peso){
    let holy;
    let fHora;
    let m;
    if(peso <= 10){
       holy= peso * 100;
        fHora=holy/24;
        m= fHora+(fHora/2);
        return fHora;
    }else if(peso <=20){
        peso= peso-10;
       holy= peso*50 + 1000
        fHora=holy/24;
        m= fHora+(fHora/2);
        return fHora;
    }else if(peso<=30){
        peso= peso-20;
        holy= peso*20 +1500;
        fHora=holy/24;
        m= fHora+(fHora/2);
        return fHora;
    }

}
function superficieCorporal(peso){
    console.log(peso);
    let superficie=(peso * 4 + 7)/(peso + 90);
    console.log(superficie);
    return superficie;
}
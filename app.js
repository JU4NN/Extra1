

const calcular=()=>{
  let Total=0;
   let SALCHICHA=document.querySelector("#Salchicha")
   let JAMON=document.querySelector("#Jamon")
   let CHULETA=document.querySelector("#Chuleta")
   let HUEVO=document.querySelector("#Huevo")
   let VERONICA=document.querySelector("#Veronica")
   let PACHUQUEÑA=document.querySelector("#Pachuqueña")
   let TEXANA=document.querySelector("#Texana")
   let TOLUQUEÑA=document.querySelector("#Toluqueña")
   let CUBANA=document.querySelector("#Cubana")
   let Refrescos=document.querySelector("#Refresco")
   let ServicioaDomicilio=document.querySelector("#ServicioaDomicilio")
  

    
    if (SALCHICHA.checked){
      
      Total+=35;

    }

    if (JAMON.checked){
      
      Total+=35;

    }

    if (CHULETA.checked){
      
      Total+=35;

    }

    if (HUEVO.checked){
      
      Total+=35;

    }

    if (VERONICA.checked){
      
      Total+=45;

    }

    if (PACHUQUEÑA.checked){
      
      Total+=45;

    }

    if (TEXANA.checked){
      
      Total+=45;
    

    }

    if (TOLUQUEÑA.checked){
      
      Total+=45;

    }

    if (CUBANA.checked){
      
      Total+=60;

    }

    if (Refrescos.checked){
      
      Total+=20;

    }


   if(ServicioaDomicilio.checked){
      
      Total=50;

    }
    
    
    

document.querySelector("#total").innerHTML=`<h3>Precio Total: $${Total.toFixed(2)} MXN</h3>`

  }

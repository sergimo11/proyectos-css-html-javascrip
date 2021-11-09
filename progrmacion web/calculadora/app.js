function sumar(){
 const forma=document.getElementById("forma");
 let numero1=forma["operando_uno"]
 let numero2=forma["operando_dos"]
 let resultado=parseInt(numero1.value)+parseInt(numero2.value);
 if(isNaN(resultado)){
     resultado="no a ingresado ningun valor para sumar"
 }
  document.getElementById("mostrar").innerHTML=resultado;
}
function resta(){
    const forma=document.getElementById("forma");
    let numero1=forma["operando_uno"]
    let numero2=forma["operando_dos"]
    let resultado=parseInt(numero1.value)-parseInt(numero2.value);
    if(isNaN(resultado)){
        resultado="no a ingresado ningun valor para restar"
    }
     document.getElementById("mostrar").innerHTML=resultado;
   }
   function Multiplicar(){
    const forma=document.getElementById("forma");
    let numero1=forma["operando_uno"]
    let numero2=forma["operando_dos"]
    let resultado=parseInt(numero1.value)*parseInt(numero2.value);
    if(isNaN(resultado)){
        resultado="no a ingresado ningun valor para multiplicar"
    }
     document.getElementById("mostrar").innerHTML=resultado;
   }
   function Dividir(){
    const forma=document.getElementById("forma");
    let numero1=forma["operando_uno"]
    let numero2=forma["operando_dos"]
    let resultado=parseInt(numero1.value)/parseInt(numero2.value);
    if(isNaN(resultado)){
        resultado="no a ingresado ningun valor para dividir"
    }
     document.getElementById("mostrar").innerHTML=resultado;
   }
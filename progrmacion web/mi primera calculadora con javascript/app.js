function sumar(){
  const forma=document.getElementById("forma")
   let numeroUno=forma["operando_uno"];
  let numerodos=forma["operando_dos"];
  let resultado=parseInt(numeroUno.value)  +   parseInt(
  numerodos.value);
  if(isNaN(resultado)){
      resultado="NO HAY NUMEROS<BR>PARA SUMAR"
  }
  document.getElementById("mostrar").innerHTML=`EL RESULTADO DE LA SUMA ES:
  ${resultado}`;
}

function restar(){

    const forma=document.getElementById("forma");

    let numeroUno=forma["operando_uno"];
    let numerodos=forma["operando_dos"]
    let resultado= parseInt(numeroUno.value) - parseInt(numerodos.value)
    if(isNaN(resultado)){
        resultado="NO HAY NUMEROS<br> PARA RESTAR"
    }
    document.getElementById("mostrar").innerHTML=`EL RESULTADO DE LA RESTA ES : ${resultado}`
}

function multiplicar(){
    const forma =document.getElementById("forma");
    let numeroUno=forma["operando_uno"];
    let numerodos=forma["operando_dos"];
    let resultado=parseInt(numeroUno.value)*parseInt(numerodos.value);
    if(isNaN(resultado)){
        resultado="NO HAY NUMEROS<br>PARA MULTIPLICAR"
    }
    document.getElementById("mostrar").innerHTML=`EL RESULTADO DE LA MULTIPLICACION ES : ${resultado}`
}

function dividir(){
    const forma=document.getElementById("forma");

    let numeroUno=forma["operando_uno"];
    let numerodos=forma["operando_dos"];
    let resultado=parseInt(numeroUno.value)/parseInt(numerodos.value);
    if (isNaN(resultado)) {
        resultado="NO HAY NUMEROS <br>PARA DIVIDIR"
    }

    document.getElementById("mostrar").innerHTML=`EL RESULTADO DE LA DIVISION ES : ${resultado}`
}
function borrar(){
   const remover= document.getElementById("forma")
   let numeroUno=remover[""];
   let numerodos=remover[""];
   let resolucion= numeroUno("")
   numerodos("")
   if (isNaN(resolucion)) {
    resolucion=""
}

document.getElementById("mostrar").innerHTML=`EL RESULTADO DE LA DIVISION ES : ${resolucion}`
}
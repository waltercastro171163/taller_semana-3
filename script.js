

function imc(){

 let peso=document.getElementById('peso').value;
 let estatura=document.getElementById('estatura').value;

 let indice= parseFloat(peso)/parseFloat(estatura*estatura);

 document.getElementById('resultado').value=indice


 if(indice>=30){
    alert('Se encuentra en obesidad')
 } else if (indice >= 25 &&  indice<=29.9){
     alert( ' Se encuentra en sobre peso ')
 } else if (indice>=18.5 && indice<=24.9){
     alert(' Se encuentra Saludable')
 }else{
        alert(' Se encuentra bajo de peso')
 }

 document.getElementById('peso').value="";
 document.getElementById('estatura').value="";


}

console.log('*****************')

function cambioM(){

 let cotiz=3800;   
 let valor=document.getElementById('dolares').value;

 let cambio= parseFloat(valor)*cotiz;  
 document.getElementById('pesos').value=cambio


  let cotiz2= 4200;
  let valor2=document.getElementById('euros').value;

  let cambio2=parseFloat(valor2)*cotiz2;
  document.getElementById('pesos2').value=cambio2;

  document.getElementById('dolares').value="";
  document.getElementById('euros').value="";


}

console.log('*****************')


function clientes() {

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let edad = document.getElementById('edad').value;
  let vacuna = document.getElementById('vacunado').value;


  const tab = document.getElementById('tab');

  tab.innerHTML +=
    `<tr>
       <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${edad}</td>  
      <td>${vacuna}</td>    
       </tr>`

  //   Borrado

  document.getElementById('nombre').value = "";
  document.getElementById('apellido').value = "";
  document.getElementById('edad').value = "  ";
  document.getElementById('edad').value = "";
  document.getElementById('vacuna').value = "";


}

console.log('*****************')

function calcular(){

let costo=5000;
let cantidad=document.getElementById('cantidad').value;

let pagar= cantidad*costo;

alert('El valor a pagar es : '+pagar+'  Gracias por su compra')

document.getElementById('cantidad').value="";

}

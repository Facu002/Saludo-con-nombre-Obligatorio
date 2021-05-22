let nombre = prompt("Cual es tu nombre?", "completa este espacio" );
if(nombre == null){
  alert("Requiere completar tu nombre")
}

let apellido = prompt("Cual es tu apellido?" , "completa este espacio" );
if(apellido == null){
  alert("Requiere completar tu apellido")
}

  function Saludo(){
  document.write("Hola " + nombre + " " + apellido);
}
  
if(nombre != null && apellido != null){
  Saludo();
}else{
   document.write("Debes completar nombre y apellido")
}

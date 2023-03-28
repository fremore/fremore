

 function validacion(f) {
    var ok = true;
    var msg = "Por favor, completar los campos:";
if(f.elements[0]. value == "") {
    msg += "- Nombre";
    ok = false;
}
if(f.elements["apellido"]. value == "") {
    msg += "- Apellido";
    ok = false;
}
if(f.email.value == ""){
msg += "- Email";
    ok = false;
 }
 if(ok == false)
 alert(msg);
 else
return alert("Muchas gracias por enviar el formulario");
  }
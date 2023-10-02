// Exercise 6
function validate() {
	let error = 0;
	// Obtener los campos de entrada
	let fName = document.getElementById("fName").value;
	let fEmail = document.getElementById("fEmail").value;
	// Obtener los elementos de error
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	// Validar los campos ingresados por el usuario: nombre y correo electrónico
	if (fName === "") {
	  error++;
	  errorName.textContent = "Por favor, ingresa tu nombre";
	} else {
	  errorName.textContent = "";
	}
	if (fEmail === "") {
	  error++;
	  errorEmail.textContent = "Por favor, ingresa tu correo electrónico";
	} else {
	  errorEmail.textContent = "";
	}
	// Verificar si hay errores
	if (error > 0) {
	  alert("Error: Por favor, completa los campos requeridos");
	} else {
	  alert("OK: Formulario validado correctamente");
	}
  }
//Recuperolos datos del html.

const input1Tarjeta = document.getElementById("nombre");
const input2Tarjeta = document.getElementById("tarjeta2");
const input3Tarjeta = document.getElementById("numeroTarjeta");
const input4Tarjeta = document.getElementById("tarjeta");
const input5Tarjeta = document.getElementById("first");
const input6Tarjeta = document.getElementById("second");
const input7Tarjeta = document.getElementById("third");
const input8Tarjeta = document.getElementById("tarjeta3");
const input9Tarjeta = document.getElementById("tarjeta5");
const input10Tarjeta = document.getElementById("tarjeta6");
const button = document.getElementById("confirm");
const form = document.getElementById("form");

//Expresiones regulares.

let regex = new RegExp("^[a-z-ñA-Z-ñ\\s]+$");

//Comparo los valores que se esciben en los input de form con los input de la tarjeta.

input1Tarjeta.addEventListener("input", function (e) {
  if (e.inputType === "deleteContentBackward") {
    input2Tarjeta.value = "";
    return;
  }

  input2Tarjeta.value = input1Tarjeta.value;

  if (input1Tarjeta.value === "") {
    return;
  }

  //Hago comparaciones con expresiones regulares. Si lo que se escribe es distinto a las expresiones regulares se invoca un sweet alert.
  if (!regex.test(input1Tarjeta.value)) {
    //Utilizacion del Framework SweetAlert para la validacion.
    Swal.fire({
      title: "Error!",
      text: "Solo se admiten letras",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
});

input3Tarjeta.addEventListener("input", function (e) {
  e.preventDefault();

  if(input3Tarjeta.value > 16){
    input3Tarjeta.value = input3Tarjeta.value.slice(0,16)
  }

  input4Tarjeta.value = input3Tarjeta.value;
});

input5Tarjeta.addEventListener("input", function (e) {
  e.preventDefault();

  input9Tarjeta.value = input5Tarjeta.value;

  if(input5Tarjeta.value > 2){
    input5Tarjeta.value = input5Tarjeta.value.slice(0,2)
  }
});

input6Tarjeta.addEventListener("input", function (e) {
  e.preventDefault();
  if(input6Tarjeta.value > 2){
    input6Tarjeta.value = input6Tarjeta.value.slice(0,2)
  }
  input8Tarjeta.value = input6Tarjeta.value;
});

input7Tarjeta.addEventListener("input", function (e) {
  e.preventDefault();
  if(input7Tarjeta.value > 3){
    input7Tarjeta.value = input7Tarjeta.value.slice(0,3)
  }
  input10Tarjeta.value = input7Tarjeta.value;
});

// Validacion al presionar el button confirm.

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    input1Tarjeta.value.length > 0 &&
    input3Tarjeta.value.length > 0 &&
    input5Tarjeta.value.length > 0 &&
    input6Tarjeta.value.length > 0 &&
    input7Tarjeta.value.length > 0 &&
    regex.test(input1Tarjeta.value)
  ) {
    //Utilizacion del Framework SweetAlert para la validacion.
    Swal.fire({
      title: "Compra Realizada con exito",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  } else {
    //Utilizacion del Framework SweetAlert para la validacion.
    Swal.fire({
      title: "Error!",
      text: "Campos incompletos o inválidos. Por favor, rellene todos los campos correctamente para continuar",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
});

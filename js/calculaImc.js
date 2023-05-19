let novoTitulo = document.querySelector("h1");
novoTitulo.textContent = "Teste de Novo título";

// let paciente = document.querySelector("#primeiro-paciente");

let pacientes = document.querySelectorAll(".paciente");

for (let loop = 0; loop < pacientes.length; loop++) {
  //console.log(pacientes[loop]);

  let tdPeso = pacientes[loop].querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = pacientes[loop].querySelector(".info-altura");
  let altura = tdAltura.textContent;

  //console.log(pacientes[loop], tdPeso);
  //console.log(peso, altura);

  let tdImc = pacientes[loop].querySelector(".info-imc");

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso Inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    // pacientes[loop].style.backgroundColor =  "Lightcoral" //* Forma de alterar o css direto pelo JS
    pacientes[loop].classList.add("paciente-invalido"); // * Boa prática, adicioando a nova classe e manipulando ela no css
  }

  if (!alturaValida) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    pacientes[loop].classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    let imc = peso / (altura * altura);
    //console.log(imc);

    tdImc.textContent = imc.toFixed(2);
  }
}

function calculoDoImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if( peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
    return true
  } else{
    return false;
  }
}
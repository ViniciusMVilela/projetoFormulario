let btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", (event) => {
  console.log("botão clicado");

  let xhr = new XMLHttpRequest(); //realiza requisição de um endereço htpp
  xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); // passamos o método e endereço

  let ajax = document.querySelector("#erro-ajax");
  
  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      ajax.classList.add("invisivel");
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);
      console.log(pacientes);

      pacientes.forEach((paciente) => {
        adicionaNovoPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      ajax.classList.remove("invisivel");
    }
  });

  xhr.send();
});

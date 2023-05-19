/*let pacientesTabela = document.querySelectorAll(".paciente") // capturando todos os pacientes pela classe .paciente

pacientesTabela.forEach((paciente) => {
    paciente.addEventListener("dblclick", function () {
        console.log("Fui clicado duas vezes")
        this.remove() //* usamos o this pois ele direciona ao dono do evento; quem chamou o evento
    });
});
*/ //* comentando o código, explicação abaixo

// por conta de não conseguirmos remover pacientes adicionados pelo formulário porque a função já foi reenderizada antes
// e sabendo que os eventos funcionam como uma bolha de refrigerante, eles sobem para o elemento pai que também escuta
// vamos alocar isso no table ao invés de em cada paciente

let pacientesDaTabela = document.querySelectorAll(".paciente");
let tabelaPacientes = document.querySelector("table");

tabelaPacientes.addEventListener("dblclick", function (event) {
  //   this.remove();                             //* não conseguimos usar this direto pois como agora está atrelado a tabela(sendo dona do evento), acabamos removendo a tabela
  // agora com event.target conseguimos acessar quem foi acessado(clicado) pelo evento
  //.parentNode -> direciona para o pai do alvo; porque o event.target direciona certinho quem foi clicado, retornando o td ao invés do tr, então subimos para o pai (tr)
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});

//setTimeout -> aguarda x milisegundos para executar a função que é passada dentro dele, no caso usamos 500ms

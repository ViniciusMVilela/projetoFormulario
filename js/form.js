// Eventos

novoTitulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
  console.log("Titulo clicado");
}

novoTitulo.addEventListener("click", () => {
  console.log("Outro método de anotar evento");
});

// * Código

//* EVENTO BTN
let btn = document.querySelector("#adicionar-paciente");
btn.addEventListener("click", (event) => {
  //! passando event como parâmetro para inibir o aviso de event depreciado; funciona sem

  event.preventDefault(); //* previne evento padrão do formulário (enviar dados para outra página e recarregar)
  console.log("Botão clicado");

  let form = document.querySelector("#form-adiciona"); //* conseguimos acessar os inputs do form atráves do "name"
  //console.log(form.altura.value); // acessamos o valor do input altura

  let dadosPaciente = obtendoDadosDoFormulario(form);
  console.log(dadosPaciente);

  //let adicionaNovoPaciente = criaNovosElementos(dadosPaciente);

  //! 10:21
  var erros = validaPaciente(dadosPaciente);

  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return; //* impede que acesse as funções seguintes
  }

  //! adicionando paciente na tabela
  //let tabela = document.querySelector("#tabela-pacientes");
  // tabela.appendChild(adicionaNovoPaciente);
  adicionaNovoPacienteNaTabela(dadosPaciente);
  form.reset(); // reseta os campos do formulário após envio
  let mensagensErro = document.querySelector("#mensagem-erro");
  mensagensErro.innerHTML = ""; //zera mensagens de erro caso adicione corretamente um paciente
});

//* FUNCÕES
function adicionaNovoPacienteNaTabela(paciente) {
  var adicionaNovoPaciente = criaNovosElementos(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(adicionaNovoPaciente);
}

function obtendoDadosDoFormulario(form) {
  //* acessando os valores input de cada campo

  let objetoPacinte = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculoDoImc(form.peso.value, form.altura.value),
  };

  //  let nome = form.nome.value;
  //  let peso = form.peso.value;
  //  let gordura = form.gordura.value;
  //  let altura = form.altura.value;

  return objetoPacinte;
}

function criaNovosElementos(paciente) {
  //* criando novos elementos
  let novoPaciente = document.createElement("tr");
  novoPaciente.classList.add("paciente");

  //! colocamos isso direto no append child
  // let nomeNovoPacinte = montaTd(paciente.nome, "info-nome");
  // let pesoNovoPacinte = montaTd(paciente.peso, "info-peso");
  // let alturaNovoPacinte = montaTd(paciente.altura, "info-altura");
  // let gorduraNovoPacinte = montaTd(paciente.gordura, "info-gordura");
  // let imcNovoPacinte = montaTd(paciente.imc, "info-imc");

  //* adicioanando novos filhos td ao tr
  novoPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
  novoPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
  novoPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
  novoPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
  novoPaciente.appendChild(montaTd(paciente.imc, "info-imc"));
  // console.log(novoPaciente);

  return novoPaciente;
}

function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  let erros = [];

  if (paciente.nome.length === 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("O peso é inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("A altura é inválida");
  }
  if (paciente.gordura.length === 0) {
    erros.push("A gordura não poder ser em branco");
  }
  if (paciente.peso.length === 0) {
    erros.push("Peso não pode ser em branco");
  }
  if (paciente.altura.length === 0) {
    erros.push("Altura não pode ser em branco");
  }
  return erros;
}

function exibeMensagemErro(erros) {
  let ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = ""; //*zera mensagem de erro antes de exibir uma nova
  erros.forEach((erro) => {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

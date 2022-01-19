let cpfAtual = "";
let senhaPadrao = "102030";

function habilitaLogin() {
  //Função que habilita o botão login
  const verificaCampos = verificarCampos();

  if (verificaCampos) {
    let login = document.getElementById("login");
    login.classList.remove("login");
    login.classList.add("login-active");
    login.removeAttribute("disabled");
  } else {
    login.classList.remove("login-active");
    login.classList.add("login");
    login.setAttribute("disabled", "disabled");
  }
}

function verificarLogin() {
  //Função que verifica se a senha está correta e da um alert

  let login = document.getElementById("senha").value;
  if (login == senhaPadrao) {
    alert("Senha Correta!");
  } else {
    alert("Senha incorreta!");
  }
}

function verificarCampos() {
  let cpf = document.getElementById("cpf").value;
  let senha = document.getElementById("senha").value;
  // cpf != ""
  if (cpf != "" && senha != "") {
    return true;
  } else {
    return false;
  }
}

let formularioSenha = false;

function esqueciMinhaSenha() {
  if (!formularioSenha) {
    changeFormToForgetPassword();
  } else {
    changeFormToLogin();
  }
  //Função que verifica qual o valor de formularioSenha e define o formulario (alterar senha/login)
}

function compararAlterarSenha() {
  let senha1 = document.getElementById("cpf").value;
  let senha2 = document.getElementById("senha").value;
  if (senha1 != senha2) {
    alert("Senhas não conferem");
  } else {
    senhaPadrao = senha1;
    alert("Senha Alterada!");
  }
  //Função que compara a alteração de senha
}

function mascaraCPF(text) {
  var v = text.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    text.value = v.substring(0, v.length - 1);
    return;
  }

  text.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) text.value += ".";
  if (v.length == 11) text.value += "-";
}
var contador = 0;
function secret(elem) {
  //Função que da rotate no UN do UNBANK
  elem.classList.toggle("rotate");
}

//#region extense functions
function changeFormToForgetPassword() {
  let txtCpf = document.getElementById("cpf");
  txtCpf.placeholder = "Nova senha";
  txtCpf.value = "";
  txtCpf.type = "password";
  txtCpf.oninput = "habilitaLogin()";
  let btnSenha = document.getElementById("senha");
  btnSenha.placeholder = "Confirme a nova senha";
  btnSenha.value = "";

  let button = document.getElementById("login");
  button.innerHTML = "ALTERAR SENHA";
  button.setAttribute("onClick", "compararAlterarSenha()");

  link = document.getElementById("esqueciSenha");
  link.style.setProperty("text-align", "center");
  link.innerHTML = "< Voltar";

  let naoSouCliente = document.getElementById("naoSouCliente");
  naoSouCliente.style.visibility = "hidden";
  formularioSenha = true;
}

function changeFormToLogin() {
  let txtCpf = document.getElementById("cpf");
  txtCpf.placeholder = "CPF";
  txtCpf.value = "";
  txtCpf.type = "text";
  txtCpf.oninput = "mascaraCPF(this);habilitaLogin()";
  let txtSenha = document.getElementById("senha");
  txtSenha.placeholder = "Senha";
  txtSenha.innerHTML = "";

  let button = document.getElementById("login");
  button.innerHTML = "CONTINUAR";
  button.setAttribute("onClick", "verificarLogin()");

  link = document.getElementById("esqueciSenha");
  link.style.setProperty("text-align", "left");
  link.innerHTML = "Esqueci minha senha >";

  let naoSouCliente = document.getElementById("naoSouCliente");
  naoSouCliente.style.visibility = "visible";
  formularioSenha = false;
}
//#endregion

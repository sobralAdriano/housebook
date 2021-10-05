import ControladorNovoAmigo from "./controller/novo-amigo.js";
import RepositorioAmigos from "./data/amigos.js";
import CardRender from "./view/card.js";

// Meu controlador é instanciado no app.js
// O app.js é meu entry point, é a partir de onde tudo começa a funcionar!
let controlador = new ControladorNovoAmigo(
  //nosso controlador inicializa os campos do formulário
  document.getElementById("field-nome"),
  document.getElementById("field-avatar"),
  document.getElementById("field-profissao"),
  document.getElementById("field-bio"),
  // tambem injetamos as dependencias de repositório e renderizador
  new RepositorioAmigos(),
  new CardRender(document.querySelector("#card-list"))
);

// Este eventListener é adicionado aqui porque queremos
// capturar o evento submit do formulário
document.addEventListener("submit", (evento) => {
  controlador.adicionar(evento);
});

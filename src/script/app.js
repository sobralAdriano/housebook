import ControladorNovoAmigo from "./controller/novo-amigo.js";
import RepositorioAmigos from "./data/amigos.js";
import CardRender from "./view/card.js";

// OUTRO DESAFIO!!
// Criar métodos para deletar um amigo da lista!
// Dicas:
// O controlador deve ter um metodo "apagar" (ou similar), que será passado como argumento a um listener do botão de excluir
//
//

let controlador = new ControladorNovoAmigo(
  document.getElementById("field-nome"),
  document.getElementById("field-avatar"),
  document.getElementById("field-profissao"),
  document.getElementById("field-bio"),
  RepositorioAmigos,
  CardRender
);

document.addEventListener("submit", (evento) => {
  controlador.adicionar(evento);
});

// this.campoNome = document.getElementById("field-nome");
// this.campoAvatar = document.getElementById("field-avatar");
// this.campoProf = document.getElementById("field-profissao");
// this.campoBio = document.getElementById("field-bio");

import RepositorioAmigos from "./bd/repositorio-amigos.js";
import Amigo from "./usuario/amigo-modelo.js";
import CardRender from "./ui/card-render.js";

// DESAFIO!!
// Separar o ControladorNovoAmigo em um módulo específico
// Dicas:
// 1) todos os elementos html precisam ser buscados no app.js
// 2) O constructor do ControladorNovoAmigo receberá esses elementos
//
// OUTRO DESAFIO!!
// Criar métodos para deletar um amigo da lista!
// Dicas:
// O controlador deve ter um metodo "apagar" (ou similar), que será passado como argumento a um listener do botão de excluir
//
//

class ControladorNovoAmigo {
  constructor() {
    this.repositorioAmigos = new RepositorioAmigos();
    new CardRender(document.querySelector("#card-list")).renderizar(
      this.repositorioAmigos.lista
    );
  }

  #criarUmAMigo() {
    let campoNome = document.getElementById("field-nome");
    let campoAvatar = document.getElementById("field-avatar");
    let campoProf = document.getElementById("field-profissao");
    let campoBio = document.getElementById("field-bio");

    return new Amigo(
      campoNome.value,
      campoAvatar.value,
      campoProf.value,
      campoBio.value
    );
  }

  #persistirNoLocalStorage(dados) {
    localStorage.setItem("amigos", JSON.stringify(dados));
  }

  adicionar(evento) {
    evento.preventDefault();
    let novoAmigo = this.#criarUmAMigo();
    this.repositorioAmigos.adicionarAmigo(novoAmigo);
    this.#persistirNoLocalStorage(this.repositorioAmigos.lista);
    CardRender.renderizar(this.repositorioAmigos.lista);
  }
}

let controlador = new ControladorNovoAmigo();

document.addEventListener("submit", (evento) => {
  controlador.adicionar(evento);
});

import Amigo from "../model/amigo.js";

export default class ControladorNovoAmigo {
  constructor(
    formElNome,
    formElAvatar,
    formElProfissao,
    formElBio,
    RepositorioAmigos,
    CardRender
  ) {
    this.campoNome = formElNome;
    this.campoAvatar = formElAvatar;
    this.campoProf = formElProfissao;
    this.campoBio = formElBio;

    this.repositorioAmigos = new RepositorioAmigos();
    this.cardRender = new CardRender(document.querySelector("#card-list"));
    this.cardRender.renderizar(this.repositorioAmigos.lista);
  }

  #criarUmAMigo() {
    return new Amigo(
      this.campoNome.value,
      this.campoAvatar.value,
      this.campoProf.value,
      this.campoBio.value
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
    this.cardRender.renderizar(this.repositorioAmigos.lista);
  }
}

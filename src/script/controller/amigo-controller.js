import Amigo from "../model/amigo.js";
import RepositorioAmigos from "../data/amigos-storage.js";
import CardRender from "../view/card.js";
import ServicoLocalStorage from "../service/local-storage.js";
import ServicoHttpFetch from "../service/http-fetch.js";

export default class ControladorNovoAmigo {
  constructor(campoNome, campoAvatar, campoProf, campoBio) {
    Object.assign(this, { campoNome, campoAvatar, campoProf, campoBio });

    this.localStg = new ServicoLocalStorage("amigos");
    this.repositorioAmigos = new RepositorioAmigos();
    this.httpService = new ServicoHttpFetch("http://localhost:3000/amigos");
    this.cardRender = new CardRender(document.querySelector("#card-list"));

    this.cardRender.listenerDeletarCard = this.remover.bind(this);
    this.cardRender.renderizar(this.repositorioAmigos.lista);

    this.#buscarDadosIniciais();
  }

  #buscarDadosIniciais() {
    this.httpService.carregar({ teste: true }).then((dados) => {
      this.repositorioAmigos.lista = dados;
      this.cardRender.renderizar(this.repositorioAmigos.lista);
    });
  }

  #criarUmAMigo() {
    return new Amigo(
      this.campoNome.value,
      this.campoAvatar.value,
      this.campoProf.value,
      this.campoBio.value
    );
  }

  #limparFormulario() {
    this.campoNome.value = "";
    this.campoAvatar.value = "";
    this.campoProf.value = "";
    this.campoBio.value = "";
    this.campoNome.focus();
  }

  remover(evento) {
    evento.stopPropagation();
    let idDoUsuario = evento.currentTarget.dataset.index;
    this.repositorioAmigos.deletarAmigo(parseInt(idDoUsuario));
    this.cardRender.renderizar(this.repositorioAmigos.lista);
  }

  adicionar(evento) {
    evento.preventDefault();
    this.repositorioAmigos.adicionarAmigo(this.#criarUmAMigo());
    this.localStg.salvar(this.repositorioAmigos.lista);
    this.#limparFormulario();
    this.cardRender.renderizar(this.repositorioAmigos.lista);
  }
}

export default class RepositorioAmigos {
  constructor(valorInicial) {
    this.#amigos = valorInicial || [];
  }
  #amigos;

  deletarAmigo(indice) {
    this.#amigos.splice(indice, 1);
  }

  adicionarAmigo(amigoObj) {
    this.#amigos.push(amigoObj);
  }

  get lista() {
    return this.#amigos;
  }

  set lista(dados) {
    if (Array.isArray(dados)) this.#amigos = dados;
    else this.#amigos = [];
  }
}

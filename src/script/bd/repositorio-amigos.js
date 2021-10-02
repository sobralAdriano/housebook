export default class RepositorioAmigos {
  constructor() {
    this.amigos = JSON.parse(localStorage.getItem("amigos")) || [];
  }

  adicionarAmigo(amigoObj) {
    this.amigos.push(amigoObj);
  }

  get lista() {
    return this.amigos;
  }
}

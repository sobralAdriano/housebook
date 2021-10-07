export default class ServicoLocalStorage {
  constructor(chave) {
    this.chave = chave;
  }

  salvar(dados) {
    localStorage.setItem(this.chave, JSON.stringify(dados));
  }

  carregar() {
    return JSON.parse(localStorage.getItem(this.chave));
  }

  limpar() {
    return localStorage.removeItem(this.chave);
  }
}

import carga from "../mock/carga-inicial.js";

export default class ServicoHttpFetch {
  constructor(url) {
    this.url = url;
  }

  async carregar(config = { teste: false }) {
    if (config.teste) {
      return carga;
    }

    let resposta = await fetch(carga);
    if (resposta.ok) {
      let dados = await resposta.json();
      return dados;
    }
  }
}

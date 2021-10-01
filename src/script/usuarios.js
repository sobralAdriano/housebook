export default class Usuario {
  constructor(nome, profissao, img, descricao) {
    this.nome = nome;
    this.img = img;
    this.descricao = descricao;
    this.profissao = profissao;
  }

  get criarCard() {
    return `
    <div class='card'>
      <div class="avatar">
        <img src="${this.img}">
      </div>
      <h2>${this.nome}</h2>
      <span>${this.profissao}</span>
      <div class="card-content">
        <h2>Bio:</h2>
        <p>${this.descricao}</p>
      </div>
    </div>`;
  }
}

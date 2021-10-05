export default class CardRender {
  constructor(elemento) {
    this.cardList = elemento;
  }

  renderizar(listaUsuarios) {
    this.cardList.innerHTML = listaUsuarios
      .map((usuario) => {
        return `
            <div class='card'>
              <div class="avatar">
                <img src="${usuario.avatar}">
              </div>
              <h2>${usuario.nome}</h2>
              <span>${usuario.profissao}</span>
              <div class="card-content">
                <h2>Bio:</h2>
                <p>${usuario.bio}</p>
              </div>
            </div>
           `;
      })
      .join("");
  }
}

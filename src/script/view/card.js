export default class CardRender {
  // oba, preciso do elemento que vai receber a lista
  // Já coloco no construtor pra garantir...
  constructor(elemento) {
    this.cardList = elemento;
  }

  // método que adiciona os listeners de remoção
  // Recebe a lista, não importa qual, e a função que vai remover,
  // não importa como.
  adicionarListenerRemocao(listaAmigos, fnRemocao) {
    listaAmigos.forEach((amigo, indice) => {
      document
        .getElementById(`btn-deletar-${indice}`)
        .addEventListener("click", fnRemocao);
    });
  }

  // Aqui é auto-explicativo, vai... #preguiçaDeEscrever😅
  renderizar(listaUsuarios) {
    this.cardList.innerHTML = listaUsuarios
      .map((usuario, indice) => {
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
              <button id='btn-deletar-${indice}' data-index="${indice}">X</button>
            </div>
           `;
      })
      .join("");
  }
}

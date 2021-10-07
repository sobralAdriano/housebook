export default class CardRender {
  constructor(elemento) {
    this.cardListEl = elemento;
    this.listeners = {
      remover: null,
    };
  }

  #gerarTemplateCard(usuario) {
    return `
          <div class="avatar">
            <img src="${usuario.avatar}">
          </div>
          <h2>${usuario.nome}</h2>
          <span>${usuario.profissao}</span>
          <div class="card-content">
            <h2>Bio:</h2>
            <p>${usuario.bio}</p>
          </div>
          
      `;
  }

  #gerarNodeBotaoRemover(id) {
    const botao = document.createElement("button");
    botao.innerText = "X";
    botao.id = `btn-deletar-${id}`;
    botao.dataset.index = id;
    botao.addEventListener("click", this.listeners.remover);
    return botao;
  }

  #gerarNodeCard(usuario, id) {
    let cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = this.#gerarTemplateCard(usuario);
    cardEl.appendChild(this.#gerarNodeBotaoRemover(id));
    return cardEl;
  }

  #limparPagina() {
    this.cardListEl.innerHTML = null;
  }

  renderizar(listaUsuarios) {
    let arrayElementos = listaUsuarios.map((usuario, indice) => {
      return this.#gerarNodeCard(usuario, indice);
    });
    if (arrayElementos.length > 0) {
      this.#limparPagina();
      arrayElementos.forEach((el) => this.cardListEl.appendChild(el));
    } else {
      this.cardListEl.innerHTML = `<p class="empty-cards">Nenhum amigo encontrado.</p>`;
    }
  }

  set listenerDeletarCard(funcao) {
    this.listeners = {
      remover: funcao,
    };
  }
}

const cardList = document.querySelector("#card-list"); // div

class RepositorioAmigos {
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

class Amigo {
  constructor(nome, avatar, profissao, bio) {
    this.nome = nome;
    this.avatar = avatar;
    this.profissao = profissao;
    this.bio = bio;
  }
}

class CardRender {
  digaOla() {
    console.log("Ola");
  }

  static renderizar(listaUsuarios) {
    cardList.innerHTML = listaUsuarios
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

class ControladorNovoAmigo {
  constructor() {
    this.repositorioAmigos = new RepositorioAmigos();
    CardRender.renderizar(this.repositorioAmigos.lista);
  }

  #criarUmAMigo() {
    let campoNome = document.getElementById("field-nome");
    let campoAvatar = document.getElementById("field-avatar");
    let campoProf = document.getElementById("field-profissao");
    let campoBio = document.getElementById("field-bio");

    return new Amigo(
      campoNome.value,
      campoAvatar.value,
      campoProf.value,
      campoBio.value
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
    CardRender.renderizar(this.repositorioAmigos.lista);
  }
}

let controlador = new ControladorNovoAmigo();

document.addEventListener("submit", (evento) => {
  controlador.adicionar(evento);
});

const cardList = document.querySelector("#card-list"); // div

const listaDeUsuarios = [];

class Usuario {
  constructor(nome, avatar, profissao, bio) {
    this.nome = nome;
    this.avatar = avatar;
    this.profissao = profissao;
    this.bio = bio;
  }
}
let usuario1 = new Usuario(
  "Guilherme",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "financeiro",
  "Sou cozinheiro de profissão"
);
let usuario2 = new Usuario(
  "Sabrina",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "financeiro",
  "Aspirante a dev júnior"
);
let usuario3 = new Usuario(
  "Francisco",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "jornalista",
  "Aspirante a dev também"
);

listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
listaDeUsuarios.push(usuario3);

class Card {
  constructor(usuario) {
    this.usuarioObj = usuario;
  }

  get renderizar() {
    return `
    <div class='card'>
      <div class="avatar">
        <img src="${this.usuarioObj.avatar}">
      </div>
      <h2>${this.usuarioObj.nome}</h2>
      <span>${this.usuarioObj.profissao}</span>
      <div class="card-content">
        <h2>Bio:</h2>
        <p>${this.usuarioObj.bio}</p>
      </div>
    </div>`;
  }
}

class ControladorNovoUsuario {
  constructor() {
    // this.campoNome = document.getElementById("field-nome");
    // this.campoAvatar = document.getElementById("field-avatar");
    // this.campoProfissao = document.getElementById("profissao");
    // this.campoBio = document.getElementById("field-bio");
  }

  adicionar(evento) {
    evento.preventDefault();

    let campoNome = document.getElementById.call(document, "field-nome");
    let campoAvatar = document.getElementById.call(document, "field-avatar");
    let campoProf = document.getElementById.call(document, "field-profissao");
    let campoBio = document.getElementById.call(document, "field-bio");

    console.log(campoNome.value);

    let usuarioNovo = new Usuario(
      campoNome.value,
      campoAvatar.value,
      campoProf.value,
      campoBio.value
    );
    listaDeUsuarios.push(usuarioNovo);

    console.log(listaDeUsuarios);
  }
}

// listaDeUsuarios.forEach((usuario) => {
//   cardList.innerHTML += new Card(usuario).renderizar;
// });

console.log(listaDeUsuarios);

let controlador = new ControladorNovoUsuario();
document.addEventListener("submit", (evento) => {
  controlador.adicionar.call(controlador, evento);
});

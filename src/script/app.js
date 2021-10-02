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

class CardRender {
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

class ControladorNovoUsuario {
  constructor() {
    CardRender.renderizar(listaDeUsuarios);
  }

  adicionar(evento) {
    evento.preventDefault();

    let campoNome = document.getElementById("field-nome");
    let campoAvatar = document.getElementById("field-avatar");
    let campoProf = document.getElementById("field-profissao");
    let campoBio = document.getElementById("field-bio");

    let usuarioNovo = new Usuario(
      campoNome.value,
      campoAvatar.value,
      campoProf.value,
      campoBio.value
    );
    listaDeUsuarios.push(usuarioNovo);
    CardRender.renderizar(listaDeUsuarios);
  }
}

// listaDeUsuarios.forEach((usuario) => {
//   cardList.innerHTML += new Card(usuario).renderizar;
// });

let controlador = new ControladorNovoUsuario();

document.addEventListener("submit", (evento) => {
  controlador.adicionar(evento);
});

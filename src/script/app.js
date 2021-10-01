import Usuario from "./usuarios.js";
import dataUser from "./database.js";

const cardList = document.querySelector("#card-list");

const listaDeUSuarios = dataUser.map((user) => {
  return new Usuario(user.nome, user.profissao, user.img, user.descricao)
    .criarCard;
});

console.log(listaDeUSuarios);

cardList.innerHTML = listaDeUSuarios.join("");

// dataUser.forEach((user) => {
//   let usuario = new Usuario(
//     user.nome,
//     user.profissao,
//     user.img,
//     user.descricao
//   );
//   cardList.innerHTML += usuario.criarCard;
// });

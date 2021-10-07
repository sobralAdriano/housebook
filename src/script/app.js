import ControladorNovoAmigo from "./controller/amigo-controller.js";

let controlador = new ControladorNovoAmigo(
  document.getElementById("field-nome"),
  document.getElementById("field-avatar"),
  document.getElementById("field-profissao"),
  document.getElementById("field-bio")
);

document.addEventListener("submit", (evento) => {
  controlador.adicionar(evento);
});

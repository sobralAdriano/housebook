// Aqui, nós modelamos o nosso amigo!
// eu posso adicionar uma propriedade aqui, e isso provavelmente não vai quebrar o código.
// Se eu remover algo daqui, talvez teremos problemas...
export default class Amigo {
  // como exercício, vc pode transformar todas as propriedades em
  // propriedades privadas e criar getters pra elas :)
  constructor(nome, avatar, profissao, bio) {
    this.nome = nome;
    this.avatar = avatar;
    this.profissao = profissao;
    this.bio = bio;
  }
}

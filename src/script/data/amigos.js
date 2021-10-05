export default class RepositorioAmigos {
  // Vamos deixar nossa lista de amigos privada
  #amigos = [];

  constructor() {
    this.#amigos = JSON.parse(localStorage.getItem("amigos")) || [];
    // carga inicial que configuramos na aula. Tá na linha 29, ali embaixo
    data.forEach((amigo) => this.#amigos.push(amigo));
  }

  // Deleta um amigo. Vc pode mudar a forma como isso acontece,
  // desde que o amigo seja deletado da lista. As outras classes
  // que implementaram este método não sabem como vc faz isso, mas vc faz
  deletarAmigo(indice) {
    this.#amigos.splice(indice, 1);
  }

  // a mesma coisa que o método de cima, mas ao contrário
  adicionarAmigo(amigoObj) {
    this.#amigos.push(amigoObj);
  }

  // função helper pra retornar a lista de amigos,
  // já que nossa lista agora é privada
  get lista() {
    return this.#amigos;
  }
}

const data = [
  {
    nome: "Michael Nascimento",
    avatar: "https://github.com/mikansc.png",
    profissao: "Desenvolvedor front end",
    bio: "Desenvolvedor Front End na Softplan! ",
  },
  {
    nome: "Daniel Meireles",
    avatar: "https://github.com/meirelesdev.png",
    profissao: "Desenvolvedor de Software",
    bio: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veritatis sed quidem earum aliquid quod a non accusantium? Voluptates cumque",
  },
  {
    nome: "Leandro da Silva",
    avatar: "https://github.com/leandro-da-silva.png",
    profissao: "Wannabe Dev",
    bio: "Aluno DevInHouse",
  },
  {
    nome: "Icaro Nascimento",
    avatar:
      "http://pm1.narvii.com/7192/b8b8ce61a1c01cce0791258ef8c6adc6bd22520cr1-451-679v2_00.jpg",
    profissao: " Dev/Estudante Front-End",
    bio: " Bom dia",
  },
  {
    nome: "Victor Bertram",
    avatar: "https://github.com/VictorD19.png",
    profissao: "Estudante de ReactJS",
    bio: "Decolando !!..",
  },

  {
    nome: "Vitor dos Santos Pedra",
    avatar: "https://github.com/DevVitorPedra.png",
    profissao: "Dev",
    bio: "Desenvolvedor artesanal",
  },
  {
    nome: "Izabela Zin",
    avatar: "https://github.com/izabelazin.png",
    profissao: "Analista de Onboarding",
    bio: "Analista de Onboarding na DM, aspirante a APM e, possivelmente, uma futura desenvolvedora de sistemas.",
  },
  {
    nome: "Fernando Silva",
    avatar: "https://github.com/fernandosmo.png",
    profissao: "Desenvolvedor no futuro próximo",
    bio: "Coordenador de loja migrando para a carreira Dev e graças ao DevInHouse, isso será logo!",
  },
  {
    nome: "Amanda Amabili",
    avatar: "https://github.com/amandaamabili.png",
    profissao: "Professora de programação",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veritatis sed quidem earum aliquid quod a non accusantium? Voluptates cumque",
  },
  {
    nome: "Lucas Klein",
    avatar: "https://github.com/olucasklein.png",
    profissao: "Dev/Estudante FullStack",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    nome: "Priscilla Rarimmy",
    avatar: "https://github.com/priscillararimmy.png",
    profissao: "Estudante",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veritatis sed quidem earum aliquid quod a non accusantium? Voluptates cumque",
  },
];

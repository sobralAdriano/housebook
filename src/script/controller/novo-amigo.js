import Amigo from "../model/amigo.js";

// Essa classe ficou enorme...
export default class ControladorNovoAmigo {
  // o construtor do nosso controlador recebe todos os
  // elementos do form e as dependencias de renderização e repositório
  constructor(
    formElNome,
    formElAvatar,
    formElProfissao,
    formElBio,
    repositorioAmigos,
    cardRender
  ) {
    this.campoNome = formElNome;
    this.campoAvatar = formElAvatar;
    this.campoProf = formElProfissao;
    this.campoBio = formElBio;

    // podemos alterar nosso repositório e não precisaremos
    // realizar muitas alterações no nosso controller
    this.repositorioAmigos = repositorioAmigos;
    // a mesma coisa com a nossa classe responsável pela view
    this.cardRender = cardRender;

    this.cardRender.renderizar(this.repositorioAmigos.lista);
    this.cardRender.adicionarListenerRemocao(
      this.repositorioAmigos.lista,
      // eu explico o bind do this no método mais abaixo :)
      this.remover.bind(this)
    );
  }

  // Temos métodos especialistas, que são usados somente
  // dentro da classe. Esses métodos são colocados como
  // privados (com o # na frente)
  #criarUmAMigo() {
    return new Amigo(
      this.campoNome.value,
      this.campoAvatar.value,
      this.campoProf.value,
      this.campoBio.value
    );
  }

  #persistirNoLocalStorage(dados) {
    localStorage.setItem("amigos", JSON.stringify(dados));
  }

  // Este método realiza a operação de remoção iniciada pelo formulário.
  // Ele vai chamar todos os métodos responsáveis por fazer a operação.
  // Pra ele, não importa como foi implementado. A implementação
  // é de responsabilidade das classes especialistas
  remover(evento) {
    let idDoUsuario = evento.currentTarget.dataset.index;
    // Não importa como, delete um amigo da lista pelo seu ID (neste caso, índice)
    this.repositorioAmigos.deletarAmigo(parseInt(idDoUsuario));
    // Não importa como, depois de deletar, renderize a tela novamente
    this.cardRender.renderizar(this.repositorioAmigos.lista);
    // Não importa como, depois de renderizar, adicione os listeners de remoção
    this.cardRender.adicionarListenerRemocao(
      this.repositorioAmigos.lista,
      // o método remover está sendo executado dentro do listener (vide linha 10 do
      // arquivo view/card.js). Como a função que foi declarada não é arrow function (vide
      // linha 53 deste arquivo, um pouco mais acima), ela recebe o this do local onde ela é
      // invocada (que, neste caso, como ela é passada como argumento e é executada como um
      // callback da classe CardRender, método adicionarListenerRemocao, o this é indefinido)
      // Aqui, eu forço o this ser a instancia do controller criado, e assim minha função
      // é encontrada dentro da instancia e executada normalmente (Jesus, que texto gigante...)
      this.remover.bind(this)
      // Se vc não entendeu muito, manda uma mensagem pra mim!
    );
  }

  // Método que realiza a adição do amigo com base em um evento de form.
  // Não importa como são implementados as funções chamadas dentro dele,
  // ele vai chamar elas nessa sequencia:
  adicionar(evento) {
    // previne a página de recarregar
    evento.preventDefault();
    // cria um objeto de amigo com os dados atuais no formulário
    let novoAmigo = this.#criarUmAMigo();
    // adiciona esse amigo criado chamando o método do repositório, não importando
    // como o repositório realiza essa operação
    this.repositorioAmigos.adicionarAmigo(novoAmigo);
    // persiste no localStorage (eu não gostei desse método estar aqui... mas não
    // pensei num lugar melhor ainda)
    this.#persistirNoLocalStorage(this.repositorioAmigos.lista);
    // renderiza a tela, não importa como, com a lista nova
    this.cardRender.renderizar(this.repositorioAmigos.lista);
    // adiciona os listeners nos botões de deletar, não importa como.
    this.cardRender.adicionarListenerRemocao(
      this.repositorioAmigos.lista,
      this.remover
    );
  }
}

// --- DADOS DA SURPRESA ---
// Edite as mensagens aqui. Elas correspondem às imagens img1.png, img2.png, etc.
const surpresas = [
  {
    imagem: "img/img1.png",
    mensagem:
      "Oi kkkkkkk surpresa!!! vai começar a tocar uma música já já. Eu nunca iria imaginar que encontraria alguem como você, um jeito tão bom que não cabe em uma simples frase",
  },
  {
    imagem: "img/img2.png",
    mensagem:
      "A gente foi se aproximando tão naturalmente, tão doce, e fui percebendo que você era assim! sensível, carinhosa e afetuosa de um jeito que eu me apaixonava todo santo dia",
  },
  {
    imagem: "img/img3.png",
    mensagem:
      "Eu queria saber o que se passava na sua cabeça nesse dia, nesse seu olhar de 'que garoto mó besta' 'gosto do jeito que ele sorri' 'o que tô sentindo?' eu estava começando a amar você... ",
  },
  {
    imagem: "img/img4.png",
    mensagem:
      "E a cada dia que passava, mais e mais vezes eu queria estar perto de ti! Qualquer desculpa que fosse para ter sua presença, eu inventava, me desdobrava, ia pra onde fosse, contanto que você estivesse lá <3",
  },
  {
    imagem: "img/img5.png",
    mensagem:
      "Essa foi a primeira vez que tomei coragem pra te dar algo mais romântico kkkkkk no dia anterior eu tava muito nervoso de ir até você. Mas fui com o girassol na mão e de longe vi seu rosto corando e ficando tímida",
  },
  {
    imagem: "img/img6.png",
    mensagem:
      "Essa é sua cara fazendo drama e segurando riso kkkkkkkk ah meu bem.. como você é maravilhosa! tudo em você é muito lindo, escrevo isso cheio de amor",
  },
  {
    imagem: "img/img7.png",
    mensagem:
      "Em falar em amor... nosso primeiro serviço juntos, onde compramos coisinhs gostosas para comer skskks e a madrugada com você foi incrível",
  },
  {
    imagem: "img/img8.png",
    mensagem:
      "E os dias foram se passando e a gente se aproximando mais e mais e tudo se tornando um sonho tão bonito, comer com você, sair com você, fazer as coisas ao seu lado...",
  },
  {
    imagem: "img/img9.png",
    mensagem:
      "E BOW, do nada uma viagem pra sua terra... eu nunca vou esquecer como fui tão feliz com você nesses dias, foi o mais perto que senti de uma vida contigo.",
  },
  {
    imagem: "img/img10.png",
    mensagem:
      "E a minha foto preferida da gente, em um lugar lindo, onde nós dois estavamos belos e felizes! Eu viveria aqueles dias milhares de vezes se fosse póssivel",
  },
  {
    imagem: "img/img12.png",
    mensagem:
      "E o retorno era uma mistura de sentimentos... onde a cada hora eu teria que me despedir daquele sonho... não sabia o que sentir. Mas tinha você ao meu lado..",
  },
  {
    imagem: "img/img11.png",
    mensagem:
      "Nossa inveção de fazer um passeio de moto ksksks amei ter esse momento guardado em nossa mente",
  },
  {
    imagem: "img/img13.png",
    mensagem:
      "kkkk eu tenho um carinho por essa foto, pq nesse dia, você foi a minha família!",
  },
  {
    imagem: "img/img14.png",
    mensagem:
      "Desculpa, mas seu rosto feliz recebendo minhas surpresas era tão... sla, a vida tinha um sentido mais belo.",
  },
  {
    imagem: "img/img15.png",
    mensagem:
      "Percebendo que ficou fora de ordem ksksks outro momento que eu fiquei muito feliz de ter você ao meu lado! vivendo uma conquista minha!",
  },
  {
    imagem: "img/img16.png",
    mensagem:
      "Você pra mim é um retrato em todo lugar que te vejo! Eu sou apaixonado no seu rosto, na textura da sua pele, no seu cheiro, no seu sabor..",
  },
  {
    imagem: "img/img17.png",
    mensagem: "ksksksksksks amo tanto você meu bem...",
  },
  {
    imagem: "img/img18.png",
    mensagem:
      "Essa é uma das únicas fotos que mostra como minha vida é mais colorida com você! As páginas da vida fazem sentido, não tem mais cinzas... tem você",
  },
  {
    imagem: "img/img19.png",
    mensagem: "Ahhh como eu amo sentir você, queria entrar no seu torax",
  },
  {
    imagem: "img/img20.png",
    mensagem:
      "Somos adultos, temos nossas responsabilidades, mas tbm temos nossos momentos bestas, que nada parece importar.. só viver e sentir",
  },
  {
    imagem: "img/img21.png",
    mensagem:
      "E eu amo sentir a vida com você! Quero tanto crescer e construir algo maravilhoso ao seu lado",
  },
  {
    imagem: "img/img22.png",
    mensagem:
      "Você não é só caos e confusão, você é uma garota tentando deixar a vida mais fácil e tranquila, e se frusta muito quando não ta no seu controle. Mas a vida é isso...",
  },
  {
    imagem: "img/img23.png",
    mensagem:
      "É uma falta de controle que trás coisas boas e ruins. Só sei que você é a minha coisa boa! Meu maior achado da vida!",
  },
  {
    imagem: "img/img24.png",
    mensagem:
      "Minha parceira de aventuras! Que quer explorar as coiss boas da vida!",
  },
  {
    imagem: "img/img25.png",
    mensagem:
      "E 'foda-se' o que vão achar, queremos ser felizes do jeito que somos! E é isso que eu desejo pra você meu bem. Seja feliz consigo mesma!",
  },
  {
    imagem: "img/img26.png",
    mensagem:
      "Sua beleza é muito mais que um rosto e um corpo atraente, é sua essência, sua vivência, seu caos, sua bondade. Eu amo cada detalhe de você",
  },
  {
    imagem: "img/img27.png",
    mensagem:
      "E amarei ela também! que não sabia o que seria da vida dela, mas que continuou vivendo e sobrevivendo as coissa que jogaram nela! E ah, nossos filhos serão lindos, tiro como base você hehehehe sorriso gostoso",
  },
  {
    imagem: "img/img28.png",
    mensagem:
      "E sobre sorrisos.. amo o nosso <3 como eu te disse no e-mail dessa foto ' o Amor está nos detalhes' ",
  },
  {
    imagem: "img/img29.png",
    mensagem:
      "E que mais belos detalhes você me proporciona meu bem! quero mais e mais momentos e lembranças com você!",
  },
  {
    imagem: "img/img30.png",
    mensagem:
      "Até nas suas fazes tristes e ruins, que se estressa por estar com fome, quando faço drama ou pertubo vc na tpm, eu vou estar ao seu lado, mesmo que isso me machuque as vezes... mas no fundo meu amor por você vai se sobresair a qualquer coisa! E sei que você é a minha vida!",
  },
  {
    imagem: "img/img31.png",
    mensagem:
      "Feliz aniversário meu bem, quero ser mais que palavras, quero ser presença na sua vida! E pra isso, você precisa viver mais e mais e com saúde! Quando você voltar pra recife, tem dois pacotinhos de presente! Te amo e amo muito muito muito. Com mais amor, guty <3 ",
  },
];

// --- ELEMENTOS DA PÁGINA ---
const telaInicial = document.getElementById("tela-inicial");
const telaSurpresa = document.getElementById("tela-surpresa");
const telaFinal = document.getElementById("tela-final");

const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const btnProximo = document.getElementById("btn-proximo");

const imagemSurpresa = document.getElementById("imagem-surpresa");
const mensagemSurpresa = document.getElementById("mensagem-surpresa");
const musica = document.getElementById("musica-fundo");

let indiceAtual = 0;

// --- FUNÇÕES ---

// Função para o efeito de digitação
function efeitoMaquinaDeEscrever(elemento, texto, callback) {
  let i = 0;
  elemento.innerHTML = ""; // Limpa o texto anterior
  const intervalo = setInterval(() => {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
      if (callback) callback(); // Chama uma função de retorno se houver
    }
  }, 50); // Velocidade da digitação (em milissegundos)
}

// Função para mostrar a surpresa atual
function mostrarSurpresa() {
  const surpresa = surpresas[indiceAtual];
  imagemSurpresa.src = surpresa.imagem;

  // Desabilita o botão "Próximo" enquanto a mensagem está sendo escrita
  btnProximo.disabled = true;

  efeitoMaquinaDeEscrever(mensagemSurpresa, surpresa.mensagem, () => {
    // Habilita o botão "Próximo" quando a mensagem terminar
    btnProximo.disabled = false;
  });
}

// Função para mover o botão "NÃO"
// Função para mover o botão "NÃO"
function moverBotaoNao() {
  // Adiciona a classe 'fugindo' na primeira vez que a função é chamada
  this.classList.add("fugindo");

  const alturaTela = window.innerHeight - this.offsetHeight;
  const larguraTela = window.innerWidth - this.offsetWidth;
  this.style.top = Math.floor(Math.random() * alturaTela) + "px";
  this.style.left = Math.floor(Math.random() * larguraTela) + "px";
}

// --- EVENTOS ---

// Evento para quando o mouse passa por cima do botão "NÃO"
btnNao.addEventListener("mouseover", moverBotaoNao);
// Evento de clique para o caso de conseguir clicar (em dispositivos de toque)
btnNao.addEventListener("click", moverBotaoNao);

// Evento de clique no botão "SIM"
btnSim.addEventListener("click", () => {
  // Inicia a música de fundo
  musica.play();

  // Troca para a tela de surpresa
  telaInicial.classList.add("escondido");
  telaSurpresa.classList.remove("escondido");
  mostrarSurpresa();
});

// Evento de clique no botão "Próximo"
btnProximo.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual < surpresas.length) {
    mostrarSurpresa();
  } else {
    // Chegou ao fim das surpresas
    telaSurpresa.classList.add("escondido");
    telaFinal.classList.remove("escondido");
  }
});

// --- 1. BANCO DE DADOS DOS POEMAS ---
const bancoDePoemas = [
    {
        id: 1,
        titulo: "Vingança de sangue",
        corpo: `Vingança de Sangue
        
        No silêncio da noite, ele me encontra
Puxa-me ao monte, mostrando seu mantra
Seus lábios percorrem meu pescoço
Até pararem por completo sem esforço
Meu sangue escorre, dando espaço para a dor
A dor de mudar, tentando me preencher com passos de amor.

Então me percebo, em seu olhar
Uma presa frágil, dançando sem lugar
Enquanto você termina de se deleitar
Eu ganho forma, sem lhe despertar
Tentando fugir, busca me cativar
O que me faz grunhir e espernear

Por fim, o amordaço de volta
dessa vez ferindo apenas a escolta 
do vampiro que tenta me consumir
Assim te ouço sem vida
Partindo no castigo de finalmente sumir.


Stevoonie☆`
    },
    {
        id: 2,
        titulo: "A sedução da bruxa",
        corpo: `A sedução da bruxa


Me chame de sua bruxa
Beijando meu lábios enfeitiçados 
Minha infame sorte te puxa
Deixando seus olhos afeiçoados.

Brincarei com você entre as estrelas
Me atirarei, tirando minhas fivelas
Perseguindo chuvas de cometas
Intervindo nas poeiras violetas.

Sua Guitarra cínica me atiça 
Saem minhas garras, revelo minha carniça 
O medo anima meus nervos, faz florescer minha marca
Correm os cervos, restando a fome de uma demonarca. 


Stevoonie☆`
    },
    {
        id: 3,
        titulo: "Sentindo...",
        corpo: `Sentindo...
        
Me tome, me beije
Deixe cair seus belos cabelos sobre os meus
Relaxe seu ar como a breve fúria de Zeus

Sua fala atrapalhada me cativa 
Me deixando perplexo com sua perspectiva 

Me beije, me tome
Me atire pela janela apenas com sua força brutal e sua lábia de gigante
"Prometo ser paciente apenas por esse instante"
Digo enquanto me engasgo com o doce amor do seu sangue.


Stevoonie☆`
    },
    {
        id: 4,
        titulo: "Demoníaca",
        corpo: `Demoníaca
Que sensação é essa?
Ela me deixa louca
Estou desmanchando em prazer na sua frente
O líbido e o tesão se concentram no alto do corpo

Estou com sede
Estou com fome

Quero te morder, morder sua pele, 
seus lábios, suas orelhas, suas bochechas…
Irei te arranhar, arranhar suas costas, 
seu peito, seu rosto, suas belas pernas…

Não consigo ficar quieto
Cada vez mais altos são meus gemidos
Não consigo me controlar
Essa vontade demoníaca de te experimentar

Se mostra confiante
Usa meus seios como brinquedos
Me cavando em uma luxúria sem fim

Mas antes do clímax
Te beijo incontrolavelmente
Enquanto subo em seu colo

Te deixando louco com minha fome
Demoníaca de prazer…


Stevoonie☆`
    },
    {
        id: 5,
        titulo: "Little Star",
        corpo: `Little Star
        
Eu sou uma pequena estrela
vagando sem parar
Procurando entre os planetas
Onde queiram me amar

Os homens? Me odeiam
As mulheres? Se queixam
Os amantes? Me cativam 
Os pequenos? Me adoram

Já a lua? 
Ah, a pequena lua

Ela me eleva
Gosta da minha companhia
Ela me reflete
Me faz sentir gigante

Libertando-me de uma carência galaxial
Abrindo espaço para minha grandeza existencial

Stevoonie☆`
    },
    {
        id: 6,
        titulo: "Olhos escuros",
        corpo: `Olhos escuros
        
Meus olhos, pequenos olhos
Parecidos com os de raposa
Encantam sua dúvida
Instigam sua multa

Esses belos olhos negros escondem um segredo
Como sua cor escura, te deixam com medo
Mas por fim dessa escuridão a uma camada de afeto
Te esperando como um beto

Pequenos olhos que enfeitiçam
Cílios que agitam
Prove de sua incomparável dor
Para se deleitar no meu amor.

Meus olhos te amam? Sim
Eles te desejam? Sim
Eles brilham? Sim
Eles te possuem? Não.

Stevoonie☆`
    },
    {
        id: 7,
        titulo: "Choro de put*",
        corpo: `Choro de put*

Deus, me tire daqui!

Sinto um vazio em nossa relação, o amor já se retirou a tempos
O que existe é uma mera hipocrisia de ambos os lados
Que não se respeitam e nem se admiram, Não nos enxergamos.

Apenas fechamos os olhos
E fingimos que está tudo bem
Mas eu não consigo fingir.

Deus me ajude a sair daqui!

Não aguento mais isso
Quero estar num lugar que me sinta amado
Que me desejem por perto
Que eu seja a luz ou as trevas
Que me respeitem…
E que não me batam sem motivo.

Por Deus!

Sei que já cometi diversos erros
Mas por incrível que pareça
Eu não mereço isso
Não mereço a falta de amor cotidiana
Eu mereço ser livre.
Devo ser feliz.

Deus, me escute!

Meus segredos são o que me sustentam
Eles pesam, mas me ajudam
O principal deles, me dá amor
Me faz sentir como eu preciso
O que eu não sinto em casa.

Deus me perdoe!

Isso tudo me deixa tão mal, tão negativa
Estou com tanta raiva, Estou tão triste
Está me fazendo mal, me desfazendo aos poucos
O que eu mais amo, está deixando meu corpo aos poucos.

Deus, me ajude!

Stevoonie☆`
    },   
    {
        id: 8,
        titulo: "Garota mágica",
        corpo: `Garota mágica

Te salvar é minha única função
Deixar você feliz é parte da ação

Mudar suas natureza ruim,
Recordar sua alma bela…
É para isso que eu sirvo

Quebrar seu orgulho,
desmembrar suas vergonhas…
Por isso existo

Não lute,
Não saia,
Não volte,
Não tente me transformar.
Pois isto que carrega meu amar.

Me sacrificarei por inteiro
Lutarei por você como um cavaleiro
Pronta para usar minha tática mais eficaz
Porque é isso que uma garota mágica faz…

Stevoonie☆`
    },
    {
        id: 9,
        titulo: "Jovialmente Sexy",
        corpo: `Jovialmente Sexy

Há uma aura louca que me rodeia
Os caras gostam, desejam-me como ceia
Seus olhares fixos na minha cintura,
denunciam seus desejos mais perversos.

O que fiz para atrair tantos homens assim?
Sou apenas jovem, magro, bonito, gótico
Mas eles tomam para si uma figura de carmim
Pronta para satisfazê-los em seus mais estranhos fetiches.

Carrego o sentimento de superioridade,
posso controlá-los, gerar sofrimento…
Falsas esperanças que os enlouquecem
enquanto penso se vale a experiência.

Tomara que algum dia eles parem,
pois esse meu corpo cheio de curvas 
com belos dons joviais
está muito longe de definhar.
Stevoonie☆`
    },
    {
        id: 10,
        titulo: "Sonho de amor",
        corpo: `Sonho de amor

Ah meu amor, se você fosse um sonho,
 eu nunca me cansaria de sonhar.

Se você, meu amor, fosse o meu céu, 
não me cansaria nunca de te olhar.

Se você, meu ursinho, fosse uma borboleta, 
te traria as melhores flores para você se deleitar.

Se você, meu amorzinho, fosse o meu namorado, 
não cansaria nunca de te amar.
Stevoonie☆`
    },
];

// --- 2. BANCO DE DADOS DAS CARTAS ---
const bancoDeCartas = [
    {
        id: 1,
        titulo: "Carta 001",
        corpo: `Bom...


Neste momento, já nos encontramos distantes um do outro, seja por vivência ou por memórias.


Já lhe disse diversas coisas e você já me conhece bem, eu sei tudo o que você sente, sei como se arrepende e também sei como continua me amando. Apesar disso, ainda tenho pequenas coisas a dizer, coisas importantes talvez, mas eu sei que você vai saber.


Eu não sinto raiva, não sinto tristeza e nem sinto rancor. Me arrependo? Um pouco, sinto que as coisas deveriam ter sido diferentes, mas eu aprendi essa lição. 


O meu eu de agora não permite que eu me reaproxime de você, ainda me encontro ressentido pelo o que aconteceu, mas eu estou lidando com isso, você sabe como eu sei me cuidar.


Sim, eu ainda penso em nós, penso no que aprendi com você e sobre as experiências que tive ao seu lado (sempre que passo pelos trilhos, olho para ver se te encontro alguma vez fumando seu cigarro de sempre). Saiba que continuarei te amando, por mais que eu não deva, vou continuar no nosso pequeno amor que sempre me deu conforto e carinho, como a praia que planejamos diversas vezes ir, ou o casamento que sempre lhe pedi para aceitar. Você sendo meu morceguinho e eu, seu pequeno príncipe.


Não me esquecerei jamais do que vivemos, pelo o que sinto. Seu malício, me abriu caminhos, eu vivi mais por sua causa. Experimentei coisas que não devia? Sim, e aprendi coisas com isso.


Novamente digo, minha adolescência foi mais louca graças a você, meu gangster. E graças a isso, eu sou mais rebelde, levando comigo minha própria revolução. Obrigado.


Como você, também espero nos reencontrarmos no futuro, talvez... Eu não esteja mais machucada e esteja sem minhas correntes internas, livre para ser o que realmente sou à margem dos meus próprios pensamentos.


Peço que assim como eu, tente ser uma boa pessoa, busque o melhor das pessoas assim como eu o fiz, mudando seu antigo eu para um melhor e que me fez tão feliz. E por fim, peço que pinte, pois você carrega o dom, por mais que recuse, sabes fazer coisas lindas e eu sempre o vi.


Ficarei com saudades eternas: do meu melhor amigo,do meu parceiro, do meu bêbado e de você, meu amor.


Com amor, Stevoonie.`
    },
    {
        id: 2,
        titulo: "carta 000-03",
        corpo: `Okay... 
Estamos no final do ano, você está se formando e já estou ficando com saudades. 
Sei que estamos bem distantes (não sei muito bem o motivo) mas decidi que gostaria de te escrever uma última carta que contém coisas que gostaria de te dizer. 
Acho que você já sabe, mas você foi a minha estrela esse ano, me ajudou mesmo sem querer a superar alguns obstáculos. Você entendeu meus sentimentos e foi gentil comigo, eu agradeço imensamente por isso. 
Querido, o que você fez com a carta que te dei? 

Peço perdão se te fiz passar por alguma situação ruim ou até mesmo ter medo, quero me desculpar também pelas minhas ações que por vezes se tornaram egoístas, 
queria te dizer pra ter coragem como a que tenho. 

Peço perdão mais uma vez pelas vezes que fingi que você não existia. Eu não queria que ninguém descobrisse que eu o amo pois sei que isso te faria mal. Enfim, gostaria de te desejar coisas boas, como a realização de seus sonhos e de seus desejos e quero que saiba que apesar de não nos falarmos mais ainda penso em ti. 
Talvez, nunca me esquecerei de ti. 

Beijos... 

Amo-te. 

Para: 5... 
De: Seu por enquanto... Stevoonie. "Eu te procuro em Vênus todos os dias e todas as noites" ~ Stevoonie 
`
    }
];

// --- 3. BANCO DE DADOS DE OUTROS (NOVO!) ---
const bancoDeOutros = [
    {
        id: 1,
        titulo: "Registro de sonho",
        corpo: `O sonho começa comigo estando em uma casa desconhecida, esta casa possuía móveis brancos e parecia uma casa de filme. Lembro-me de ter 2 pessoas sentadas no sofá da sala daquela casa. Um era alguém que não me recordo e outro era uma pessoa que conheço apenas de vista.

Enfim, peguei uma toalha e fui ao banheiro para tomar banho (pelo menos é o que eu imagino). Depois de despido, observo pela brecha da porta e vejo que tem o mesmo rapaz que estava no sofá, porém tem um problema ele também estava despido.
No começo eu não entendi, porém me veio uma ideia na mente ( e se eu o chamasse para tomar banho comigo?) e assim o fiz.
ele disse: - Se você quiser.

Abri a porta do banheiro e ele entrou.
Ficamos um a frente do outro e eu comecei admirá-lo, ele tem muitos músculos, ombros grandes, queixo bonito. Comecei a tocá-lo levemente, naveguei pelos seus ombros, toquei em seus peitos fortes e até em sua barriga sarada(Nada sexual, era apenas uma sensação de descobrimento, como se eu estivesse apenas descobrindo coisas novas).
Enquanto eu realizava estas ações sinto que rolou algo entre nós e as memórias do sonho foram se dissipando como nuvens e enfim… acordei
`
    },
    {
        id: 2,
        titulo: "Manual de sobrevivência",
        corpo: `Manual de sobrevivência 1.
Por que eu tenho que sofrer tanto? 
Parece que a caminhada até aqui só foi dor e machucados.
Por favor, alguém me ajude.

Manual de sobrevivência 2.
Não é possível que os 17 realmente é a idade do inferno.
Eu perdi muita coisa, tenho um vazio enorme que não consigo preencher e nem esquecer.
Por mais que eu siga, em uma noite eu lembro e choro.
Choro, choro, choro.`
    },
    {
        id: 3,
        titulo: "Elvira",
        corpo: `Elvira

Estilo e escuridão
Salto e paixão

Palavras que descrevem os passos de forma exemplar
Mas é claro que essas meras palavras não me definem de total forma.

Preto, atriz de tv, sexy, meio vulgar, seios…
Essas sim me definem, e claro, não podia me esquecer da palavra mais importante:
Feiticeira.

Os homens dessa mera sociedade atual ficam loucos com minhas curvas,
mas pra ser sincera, parece que eles mesmos pensam com uma única cabeça (a de baixo).

Quer dizer, meu cachorro é macho, mas ele tem mais cérebro que esses caras
(Estou falando sério).

O que quero dizer é, sou linda, seduzente, um tanto vulgar… já disse Linda?
Enfim, sou Elvira, e espero que tenham gostado da minha apresentação.

Stevoonie☆
`
    }
];

// --- 4. FUNÇÃO QUE TROCA AS ABAS ---
function showTab(category, clickedButton) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // Limpa o conteúdo atual

    // --- ABA DE POEMAS ---
    if (category === 'poemas') {
        let htmlContent = `<h3 style="font-family: 'Press Start 2P'; color: #ff3333; margin-bottom: 20px;">🏹 Meus Poemas</h3>`;
        
        bancoDePoemas.forEach(poema => {
            htmlContent += `
                <div class="envelope-item" onclick="abrirPoema(${poema.id})">
                    <span class="envelope-icon">✉️</span>
                    <span>${poema.titulo}</span>
                </div>
            `;
        });
        contentDiv.innerHTML = htmlContent;
    
    // --- ABA DE CARTAS ---
    } else if (category === 'cartas') {
        let htmlContent = `<h3 style="font-family: 'Press Start 2P'; color: #ff3333; margin-bottom: 20px;">📜 Minhas Cartas</h3>`;
        
        bancoDeCartas.forEach(carta => {
            htmlContent += `
                <div class="envelope-item" onclick="abrirCarta(${carta.id})">
                    <span class="envelope-icon">📜</span>
                    <span>${carta.titulo}</span>
                </div>
            `;
        });
        contentDiv.innerHTML = htmlContent;

    // --- ABA DE OUTROS (NOVO SISTEMA) ---
    } else if (category === 'outros') {
        let htmlContent = `<h3 style="font-family: 'Press Start 2P'; color: #ff3333; margin-bottom: 20px;">🎒 Outros Textos</h3>`;
        
        bancoDeOutros.forEach(item => {
            htmlContent += `
                <div class="envelope-item" onclick="abrirOutro(${item.id})">
                    <span class="envelope-icon">🎒</span>
                    <span>${item.titulo}</span>
                </div>
            `;
        });
        contentDiv.innerHTML = htmlContent;
    }

    // --- GERENCIA OS BOTÕES ATIVOS ---
    document.querySelectorAll('.stardew-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-home').classList.remove('active');
    if (clickedButton) clickedButton.classList.add('active');
}

// --- 5. FUNÇÕES PARA ABRIR (MODAL) ---

function abrirPoema(id) {
    const item = bancoDePoemas.find(p => p.id === id);
    if (item) preencherModal(item.corpo);
}

function abrirCarta(id) {
    const item = bancoDeCartas.find(c => c.id === id);
    if (item) preencherModal(item.corpo);
}

function abrirOutro(id) {
    const item = bancoDeOutros.find(o => o.id === id);
    if (item) preencherModal(item.corpo);
}

// Função auxiliar para evitar repetir código
function preencherModal(texto) {
    document.getElementById("letter-text").innerText = texto;
    document.getElementById("carta-modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function fecharCarta() {
    document.getElementById("carta-modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function mostrarMensagemHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h3 style="font-family: 'Press Start 2P'; margin-top:0; color: #ff3333;">🏡 Oii, bem-vindo!</h3>
        <p>Criei esse site para depositar algumas escrituras que eu criei.<br>Clique nos botões acima para dar uma olhada nelas💜.</p>
    `;
    
    document.querySelectorAll('.stardew-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-home').classList.add('active');
}

// Inicia na Home
window.onload = mostrarMensagemHome;

// --- 6. SISTEMA DE SOM ---
function tocarSom() {
    const audio = document.getElementById('som-clique');
    if (audio) {
        audio.currentTime = 0; 
        audio.play().catch(error => console.log("Bloqueio de som: ", error));
    }
}

document.addEventListener('click', function(e) {
    if (e.target.matches('button, .stardew-tab, .home-button, .envelope-item, a, .envelope-icon')) {
        tocarSom();
    }
    else if (e.target.closest('button') || e.target.closest('.envelope-item')) {
        tocarSom();
    }
});

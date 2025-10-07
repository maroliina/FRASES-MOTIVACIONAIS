const saudacao = document.getElementById("saudacao");
const frase = document.getElementById("frase");
const icone = document.getElementById("icone");

const fraseManha = [
    
    "Hoje é um novo começo. Respire fundo, agradeça e vá com tudo!",

    "Cada manhã é uma nova chance para mudar sua história.",

    "Levante-se com determinação, deite-se com satisfação.",

    "Não espere por oportunidades. Crie-as. Bom dia!",

    "Acordar é um presente. Viver bem o dia é sua escolha."];
const fraseTarde = [

    "Você já chegou até aqui. Continue firme, o melhor ainda está por vir.",

    "A tarde é o lembrete de que ainda dá tempo de fazer a diferença.",

    "Foque no agora. Cada pequeno passo importa.",

    "Respire, recomece, reajuste — mas nunca desista.",

    "A persistência transforma obstáculos em conquistas."
];
const fraseNoite = [
    "Hoje pode não ter sido perfeito, mas foi um passo à frente.",

    "Agradeça pelo que passou e descanse para o que virá.",

    "Durma com sonhos. Acorde com propósitos.",

    "A calma da noite é o espaço onde a força se renova.",

    "Você sobreviveu a mais um dia. Isso já é vitória."
];

function atualizaSaudacao(){
    const hoje = new Date();
    const hora = hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
    if (hora >= 5 && hora < 12){
        msgSaudacao = "Bom dia";
        imgFundo = "url(manha.jpeg)";
        imgIcone = "soup.png";
        frasesDoMomento = fraseManha;
    } else if (hora >= 12 && hora <18){
        msgSaudacao = "Boa tarde";
        imgFundo = "url(tarde.jpg)";
        imgIcone = "sun (1).png";
        frasesDoMomento = fraseTarde;
    }else{
        msgSaudacao = "Boa noite";
        imgFundo = "url(noite.jpeg)";
        imgIcone = "sparkles.png";
        frasesDoMomento = fraseNoite;
    }
    saudacao.textContent = msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone;
    const randomIndex = Math.floor(Math.random() * frasesDoMomento.length);
    frase.textContent = frasesDoMomento[randomIndex];
}
atualizaSaudacao();
setInterval(atualizaSaudacao, 8000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}

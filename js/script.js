/* ======= / ======= */

let jogarNovamente = true;
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;


/* ======= Lista de palavras(Objetos) ======= */
const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra005={
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra006={
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra007={
        nome: "CHINA",
        categoria: "LUGARES"
    },
    palavra008={
        nome: "PORTUGAL",
        categoria: "LUGARES"
    },
    palavra009={
        nome: "AMAZONAS",
        categoria: "LUGARES"
    },
    palavra010={
        nome: "MANAUS",
        categoria: "LUGARES"
    },
    palavra011={
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012={
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013={
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014={
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015={
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016={
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017={
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018={
        nome: "SKATEBOARDING",
        categoria: "TRANSPORTE"
    },
    palavra019={
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
    palavra020={
        nome: "IATE",
        categoria: "TRANSPORTE"
    },
    palavra021={
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022={
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023={
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra024={
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra025={
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra026={
        nome: "IPHONE",
        categoria: "OBJETOS"
    },
    palavra027={
        nome: "BONECA",
        categoria: "OBJETOS"
    },
    palavra028={
        nome: "PARALELEPIPEDO",
        categoria: "OBJETOS"
    },
    palavra029={
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra030={
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031={
        nome: "SUSHI",
        categoria: "ALIMENTOS"
    },
    palavra032={
        nome: "MORANGO",
        categoria: "ALIMENTOS"
    },
    palavra033={
        nome: "ABACAXI",
        categoria: "ALIMENTOS"
    },
    palavra034={
        nome: "MACARRONADA",
        categoria: "ALIMENTOS"
    },
    palavra035={
        nome: "SANDUICHE",
        categoria: "ALIMENTOS"
    },
    palavra036={
        nome: "VINAGRETE",
        categoria: "ALIMENTOS"
    },
    palavra037={
        nome: "ALCATRA",
        categoria: "ALIMENTOS"
    },
    palavra038={
        nome: "PIZZA",
        categoria: "ALIMENTOS"
    },
    palavra039={
        nome: "LAMEN",
        categoria: "ALIMENTOS"
    },
    palavra040={
        nome: "LARANJA",
        categoria: "ALIMENTOS"
    }, //
    palavra041={
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra042={
        nome: "LARGATIXA",
        categoria: "ANIMAIS"
    },
    palavra043={
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },
    palavra044={
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra045={
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra046={
        nome: "TARTARUGA",
        categoria: "ANIMAIS"
    },
    palavra047={
        nome: "CANGURU",
        categoria: "ANIMAIS"
    },
    palavra048={
        nome: "JARARACA",
        categoria: "ANIMAIS"
    },
    palavra049={
        nome: "JACARE",
        categoria: "ANIMAIS"
    },
    palavra050={
        nome: "BOI",
        categoria: "ANIMAIS"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria:"TV E CINEMA"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria:"TV E CINEMA"
    },
    palavra053 = {
        nome: "CASA MONSTRO",
        categoria:"TV E CINEMA"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria:"TV E CINEMA"
    },
    palavra055 = {
        nome: "STRANGER THINGS",
        categoria:"TV E CINEMA"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria:"TV E CINEMA"
    },
    palavra057 = {
        nome: "MULHER MARAVILHA",
        categoria:"TV E CINEMA"
    },
    palavra058 = {
        nome: "O INCRIVEL HULK",
        categoria:"TV E CINEMA"
    },
    palavra059 = {
        nome: "BOB ESPONJA",
        categoria:"TV E CINEMA"
    },
    palavra060 = {
        nome: "PANICO NA TV",
        categoria:"TV E CINEMA"
    },
]


/* ======= Cria a palavra secreta ======= */
function criaPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);
    

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    //mostra no console
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

criaPalavraSecreta();



/* ======= Montar a palavra na tela ======= */
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i=0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            }else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
            }            
        }else {
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            }
            else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        }
    }
}

montarPalavraNaTela();


/* ======= Verifica a letra escolhida ======= */
function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){ // verifica o número de tentativas
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra); //chamada da função
        montarPalavraNaTela();
    }   
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false){
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#fff";
    }
    else {
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#fff";
    }
}
    


/* ======= Função que verifica se a letra digitada e igual a letra sorteada. ======= */
async function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);

    if(pos < 0){ //se a letra não existir
        tentativas--;

        //aparecer imagem
        carregaImagemForca();
        
        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada);
            
            while(jogarNovamente == true){
                document.getElementById("btnReiniciar").style.backgroundColor = 'red';
                document.getElementById("btnReiniciar").style.scale = 1.3;
                await atraso(500);
                document.getElementById("btnReiniciar").style.backgroundColor = 'yellow';
                document.getElementById("btnReiniciar").style.scale = 1;
                await atraso(500);
            }
        }

        //verificar se ainda tem tentativas 
        // mensagem
    }else { // a letra existe
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){ //verificando as listas
            vitoria = false;
        }
    }

    if(vitoria == true){
        // mensagem na tela
        abreModal("PARABÉNS!", "Você Venceu! <br>");
        tentativas = 0;

        while(jogarNovamente == true){
            document.getElementById("btnReiniciar").style.backgroundColor = 'red';
            document.getElementById("btnReiniciar").style.scale = 1.3;
            await atraso(500);
            document.getElementById("btnReiniciar").style.backgroundColor = 'yellow';
            document.getElementById("btnReiniciar").style.scale = 1;
            await atraso(500);
        }
    }
}

async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo));
}


/* ======= Função que carrega a imagem do corpo do boneco na forca ======= */
function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('../img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('../img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('../img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('../img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('../img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('../img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('../img/forca.png')";
            break;
    }
}


/* ======= Modal ======= */
function abreModal(titulo, mensagem){

    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}



/* ======= BTN Reiniciar ======= */
let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});





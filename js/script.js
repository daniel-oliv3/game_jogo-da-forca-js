let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];


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
]


/* ======= Cria a palavra secreta ======= */
function criaPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);
    

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

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
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

montarPalavraNaTela();


/* ======= Verifica a letra escolhida ======= */
function verificaLetraEscolhida(letra){
    
}






/* ======= / ======= */






// let letrasDigitadas = [];
// let jogarNovamente = true;
let palavraSecretaSorteada;
let palavraCategoria;
let tentativas = 6;
let palavraSecretaPorLetra = [];
let listaDinamica = [];
let palavras = [];
let jogoAutomatico = true;

carregaListaAutomatica();

//sorteia a palavra secreta e sua categoria
if (palavras.length>0) {
    criarPalavraSecreta();
}

function criarPalavraSecreta(){
    // gera um indice aleatÃ³rio entre 0 e 50 para servir de apoio na escolha da palavra que estÃ¡ na lista
    const indexPalavra = parseInt(Math.random() * palavras.length);
    // passa o indice sorteado para a lista referenciar a palavra Secreta
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraCategoria = palavras[indexPalavra].categoria;
}

// cria uma lista com a palavra secreta separado na lista por cada letra
//palavraSecretaPorLetra = palavraSecretaSorteada.split('');  

// monta a quantidade de espaÃ§os da palavra na tela
// montarPalavraNaTela(palavraSecretaPorLetra)
if (palavras.length>0) {
    montarPalavraNaTela()
}
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraCategoria;

    const palavraTela = document.getElementById("palavra-secreta"); 
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){ 
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " "
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+ listaDinamica[i] +"</div>"   
                
            }
            else{
                listaDinamica[i] = "&nbsp;"
              palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
            }    
         } 
         else{  
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " "
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+ listaDinamica[i] +"</div>"    
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>" 
            }
              
         }  
    }    
} 
function mudarStyleLetra(tecla, condicao){
    if(condicao == false){
        document.getElementById(tecla).style.background="#C71585"   
        document.getElementById(tecla).style.color="#FFFFFF" 
    }
    else{
        document.getElementById(tecla).style.background="#008000"   
        document.getElementById(tecla).style.color="#FFFFFF"
    }  
}
function verificaLetraEscolhida(letra){
    if (isNullOrWhiteSpace(palavraSecretaSorteada)) {
        return;
    }

    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra, false) ;
        comparaListas(letra);
        montarPalavraNaTela();
    } 
}
// function verificaSeLetraNaoFoiDigitada(letra){
//    response = 0;
//    if(letrasDigitadas.length < 1){
//         letrasDigitadas.push(letra);       
//         response =  0;
//    }
//    else{
//         for(i = 0; i <= letrasDigitadas.length; i++){
//              if(letra == letrasDigitadas[i]){
//                   // se o retorno for maior ou igual a 0 existe no array o valor procurado
//                   if(function jaTemLetra() { 
//                       return  (letrasDigitadas.indexOf(letra) >= 0);
//                     }){
//                     return response =  1
//                   }     
//              }
//              else{
//                   response =  2;
//              }
//         }
//    } 
//    return response;
// }

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){// significa que a letra nÃ£o existe na palavra secreta
         tentativas--
         carregaImagenForca();

         if(tentativas == 0){  
            abreModal("OPS!", "NÃ£o foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada)
            PiscarBotaoJogarNovamente(true);
         }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true)
         for(i = 0; i < palavraSecretaSorteada.length; i++){
             if(palavraSecretaSorteada[i] == letra){
                  listaDinamica[i] = palavraSecretaSorteada[i];      
             }    
        }   
    } 
    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
         if (listaDinamica[i] != palavraSecretaSorteada[i]) { 
              vitoria = false
         }
    }
    if(vitoria == true){
        abreModal("PARABÃ‰NS!", "VocÃª venceu <br>") 
         tentativas = 0;
         PiscarBotaoJogarNovamente(true);
    }   
}

async function Atraso(tempo){
    return new Promise(x => setTimeout(x, tempo))
}

function carregaImagenForca()
{
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')"
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')"
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')"
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')"
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')"
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')"
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')"
            break;

    }
    
}
function abreModal(titulo, mensagem) {
    let modalTitle = document.getElementById("exampleModalLongTitle")
    modalTitle.innerText = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
         show: true
    });
}

var btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
    abreModal("AGNALDO GUIMARÃƒES", "https://www.agnaldoguimaraes.dev.br")
});

//region modal
// Get the modal
const modal = document.getElementById("modal-alerta");

//Get the button that opens the modal
var btnAbreModal = document.getElementById("abreModalAddPalavra");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnAbreModal.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var btnfechaModal = document.getElementById("fechaModal");
btnfechaModal.onclick = function() {
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
    modal.style.display = "none";
  }
}

//funÃ§Ã£o para validar dados vazios
function isNullOrWhiteSpace( input ) {
    return !input || !input.trim();
}

function carregaListaAutomatica(){
    palavras = [
        palavra001 = {
            nome: "IRLANDA",
            categoria:"LUGARES"
        },
        palavra002 = {
            nome: "EQUADOR",
            categoria:"LUGARES"
        },
        palavra003 = {
            nome: "CHILE",
            categoria:"LUGARES"
        },
        palavra004 = {
            nome: "INDONESIA",
            categoria:"LUGARES"
        },
        palavra005 = {
            nome: "MALDIVAS",
            categoria:"LUGARES"
        },
        palavra006 = {
            nome: "INGLATERRA",
            categoria:"LUGARES"
        },
        palavra007 = {
            nome: "GROELANDIA",
            categoria:"LUGARES"
        },
        palavra008 = {
            nome: "UZBEQUISTAO",
            categoria:"LUGARES"
        },
        palavra009 = {
            nome: "INDONESIA",
            categoria:"LUGARES"
        },
        palavra010 = {
            nome: "CREGUENHEM ",
            categoria:"LUGARES"
        },
        palavra011 = {
            nome: "BICICLETA",
            categoria:"TRANSPORTE"
        },
        palavra012 = {
            nome: "LANCHA",
            categoria:"TRANSPORTE"
        },
        palavra013 = {
            nome: "NAVIO",
            categoria:"TRANSPORTE"
        },
        palavra014 = {
            nome: "TELEFERICO",
            categoria:"TRANSPORTE"
        },
        palavra015 = {
            nome: "MOTOCICLETA",
            categoria:"TRANSPORTE"
        },
        palavra016 = {
            nome: "BARCO",
            categoria:"TRANSPORTE"
        },
        palavra017 = {
            nome: "AERONAVE",
            categoria:"TRANSPORTE"
        },
        palavra018 = {
            nome: "TREM",
            categoria:"TRANSPORTE"
        },
        palavra019 = {
            nome: "CAIAQUE",
            categoria:"TRANSPORTE"
        },
        palavra020 = {
            nome: "FUNICULAR",
            categoria:"TRANSPORTE"
        },
        palavra021 = {
            nome: "XICARA",
            categoria:"OBJETOS"
        },
        palavra022 = {
            nome: "MOEDA",
            categoria:"OBJETOS"
        },
        palavra023 = {
            nome: "ESPARADRAPO",
            categoria:"OBJETOS"
        },
        palavra024 = {
            nome: "SINO",
            categoria:"OBJETOS"
        },
        palavra025 = {
            nome: "CHUVEIRO",
            categoria:"OBJETOS"
        },
        palavra026 = {
            nome: "TAMBORETE",
            categoria:"OBJETOS"
        },
        palavra027 = {
            nome: "LAMPADA",
            categoria:"OBJETOS"
        },
        palavra028 = {
            nome: "BOCAL",
            categoria:"OBJETOS"
        },
        palavra029 = {
            nome: "CORTINA",
            categoria:"OBJETOS"
        },
        palavra030 = {
            nome: "LAPIS",
            categoria:"OBJETOS"
        },
        palavra031 = {
            nome: "MELANCIA",
            categoria:"ALIMENTOS"
        },
        palavra032 = {
            nome: "AMENDOIM",
            categoria:"ALIMENTOS"
        },
        palavra033 = {
            nome: "ESFIRRA",
            categoria:"ALIMENTOS"
        },
        palavra034 = {
            nome: "GOROROBA",
            categoria:"ALIMENTOS"
        },
        palavra035 = {
            nome: "JANTAR",
            categoria:"ALIMENTOS"
        },
        palavra036 = {
            nome: "SABOROSO",
            categoria:"ALIMENTOS"
        },
        palavra037 = {
            nome: "DESJEJUM",
            categoria:"ALIMENTOS"
        },
        palavra038 = {
            nome: "MASTIGAR",
            categoria:"ALIMENTOS"
        },
        palavra039 = {
            nome: "ENGOLIR",
            categoria:"ALIMENTOS"
        },
        palavra040 = {
            nome: "DOCERIA",
            categoria:"ALIMENTOS"
        },
        palavra040 = {
            nome: "DRAGAO",
            categoria:"ANIMAIS"
        },
        palavra041 = {
            nome: "GALINHA",
            categoria:"ANIMAIS"
        },
        palavra042 = {
            nome: "PAVAO",
            categoria:"ANIMAIS"
        },
        palavra043 = {
            nome: "CAMELO",
            categoria:"ANIMAIS"
        },
        palavra044 = {
            nome: "PERU",
            categoria:"ANIMAIS"
        },
        palavra045 = {
            nome: "ZEBRA",
            categoria:"ANIMAIS"
        },
        palavra046 = {
            nome: "DROMEDARIO",
            categoria:"ANIMAIS"
        },
        palavra047 = {
            nome: "CALANGO",
            categoria:"ANIMAIS"
        },
        palavra048 = {
            nome: "SAGUI",
            categoria:"ANIMAIS"
        },
        palavra049 = {
            nome: "LAGARTIXA",
            categoria:"ANIMAIS"
        },
        palavra050 = {
            nome: "HIPOPOTAMO",
            categoria:"ANIMAIS"
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
        }
    ];
}

function sortearManual(){
    if (jogoAutomatico == true) {
        // jogarNovamente = false;
        location.reload();
    } 
    else{
        if (palavras.length > 0) {
            listaDinamica=[];
            criarPalavraSecreta();
            montarPalavraNaTela();
            resetaTeclas();
            tentativas = 6;
            PiscarBotaoJogarNovamente(false);
        }   
    }
}

function listaAutomatica(){ 
    if (jogoAutomatico == true) {  // destiva o modo automatico
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-play-circle'></i>";
        palavras= [];
        jogoAutomatico = false;

        document.getElementById("recarregar").style.display = "block"
        document.getElementById("abreModalAddPalavra").style.display = "block"

        const categoria = document.getElementById("categoria");
        categoria.innerHTML = "";
    
        const palavraTela = document.getElementById("palavra-secreta"); 
        palavraTela.innerHTML = "";

        palavraSecretaSorteada = "";
        palavraCategoria = "";

        document.getElementById("status").innerText = "Modo Manual"

    }else if (jogoAutomatico == false) { // ativa o modo automatico
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-pause-circle'></i>";
        carregaListaAutomatica();
        jogoAutomatico = true

        document.getElementById("abreModalAddPalavra").style.display = "none"

        criarPalavraSecreta()
        montarPalavraNaTela()

        document.getElementById("status").innerText = "Modo AutomÃ¡tico"

    }
}

function adicionarPalavra(){
    let addPalavra = document.getElementById("addPalavra").value.toUpperCase();
    let addCategoria = document.getElementById("addCategoria").value.toUpperCase();

    if (isNullOrWhiteSpace(addPalavra) || isNullOrWhiteSpace(addCategoria) || addPalavra.length < 3 || addCategoria.length < 3){
        abreModal("ATENÃ‡ÃƒO", "Palavra e/ou Categoria invÃ¡lidos")
        return;
    }
    else{
        let palavra = {
            nome: addPalavra,
            categoria: addCategoria
        }
        palavras.push(palavra)
        sortearManual();    
    }  

    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
};

function resetaTeclas(){
    let teclas = document.querySelectorAll(".teclas > button")
    
    teclas.forEach((x) => {
        x.style.background="#ffffff";
        x.style.color="#8B008B" 
        x.disabled = false;
    })

    // document.getElementById("tecla-A").style.background="#ffffff"   
    // document.getElementById("tecla-A").style.color="#8B008B"    

    // document.getElementById("tecla-B").style.background="#ffffff"   
    // document.getElementById("tecla-B").style.color="#8B008B" 
}

async function PiscarBotaoJogarNovamente(querJogar){
    if (querJogar) {
        document.getElementById("jogarNovamente").style.display = "block";
    }
    else{
        document.getElementById("jogarNovamente").style.display = "none"; 
    }
    // while (querJogar == true) {
    //     document.getElementById("jogarNovamente").style.display = "block";
    //     document.getElementById("jogarNovamente").style.color = 'red';
    //     document.getElementById("jogarNovamente").style.scale = 1.3;
    //     await Atraso(500); 
    //     document.getElementById("jogarNovamente").style.color = 'yellow';
    //     document.getElementById("jogarNovamente").style.scale = 1;
    //     await Atraso(500);
    // }
    // document.getElementById("jogarNovamente").style.display = "none";  
}


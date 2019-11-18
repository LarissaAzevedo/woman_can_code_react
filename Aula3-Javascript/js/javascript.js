//definição de variáveis
cHeader = document.getElementById("header")
cModal = document.getElementById("modal")
cBotao = document.getElementById("botao")
cContainer = document.getElementById("container")

//animação do header
window.onscroll = function () { scrollWindow() }
function scrollWindow() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        cHeader.classList.add('menupreto')
    } else {
        cHeader.classList.remove('menupreto')
    }
}

//animação do botão - hover
function btnMuda() {
    cBotao.classList.add('botao_hover')
}
function btnVolta() {
    cBotao.classList.remove('botao_hover')
}

// chama o modal
function clique(event){
    cModal.classList.add('modalOn')
    cModal.classList.add('animated','bounceInDown')
    cContainer.classList.add('container')
    cBotao.classList.add('btnOff')
    event.stopPropagation()
}

//clique fora do modal para ele sumir
window.onclick = function(event){
    this.cliqueFora(event)
}
function cliqueFora(event){
    cModal.classList.add('animated','bounceOutDown')
    cContainer.classList.remove('container')
    event.stopPropagation();

    setTimeout(() => {
        cModal.classList.remove('animated','bounceOutDown')
        cBotao.classList.remove('btnOff')
        cModal.classList.remove('modalOn')
    }, 1000);
}








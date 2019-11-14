//animação do header
window.onscroll = function () { scrollWindow() }
function scrollWindow() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add('menupreto')
    } else {
        document.getElementById("header").classList.remove('menupreto')
    }
}

//animação do botão - hover
function btnMuda() {
    document.getElementById("botao").classList.add('botao_hover')
    // document.getElementById("botao").classList.add('link_hover')
}
function btnVolta() {
    document.getElementById("botao").classList.remove('botao_hover')
    // document.getElementById("botao").classList.remove('link_hover')
}

// chama o modal
function clique(event){
    document.getElementById("modal").classList.add('modalOn')
    document.getElementById("modal").classList.add('animated','bounceInDown')
    event.stopPropagation()
}

//clique fora do modal para ele sumir
window.onclick = function(){
    this.cliqueFora()
}
function cliqueFora(event){
    document.getElementById("modal").classList.add('animated','bounceInDown')
    document.getElementById("modal").classList.remove('modalOn')
    event.stopPropagation();
}








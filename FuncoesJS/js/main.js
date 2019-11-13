var divId = document.getElementById("div_id")



// WINDOW ON SCROLL

window.onscroll = function() {scrollWindow()};

function scrollWindow() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    divId.insertAdjacentHTML("afterbegin", "<h1>Fez o Scroll</h1>");
  }
}



// WINDOW ON CLICK

window.onclick = function() {
  clickWindow()
};

function clickWindow() {
  divId.insertAdjacentHTML("afterbegin", "<h1>Clicou na janela toda!!!</h1>");
}





// KEY PRESS

// window.onkeypress = function() {keyPressWindow(event)};

// function keyPressWindow(event) {
//   divId.innerHTML = "<h1> Pressionou a tecla "+ event.keyCode +"</h1>"
// }


window.onkeydown = function() {keyDownWindow(event)};

function keyDownWindow(event) {
  divId.innerHTML = "<h1> Pressionou a tecla com keydown "+ event.keyCode +"</h1>"
}


window.onkeyup = function() {keyUpWindow(event)};

function keyUpWindow(event) {
  divId.innerHTML = "<h1> Pressionou a tecla com keyup "+ event.keyCode +"</h1>"
}





// BOTÕES

function btnClick(event) {
  divId.innerHTML = "<h1>Click Simples com stop propagation</h1>"
  event.stopPropagation();
}

function btnOnmouseover() {
  divId.innerHTML = "<h1>On Mouse Over</h1>"
}

function btnOnmouseout() {
  divId.innerHTML = "<h1>On Mouse Out</h1>"
}





// LINKS

function externalLink(event) {
  divId.innerHTML = "<h1>Link do Google com prevent Default</h1>"
  event.preventDefault()
}



function effectLink(event) {
  divId.classList.add('div_effect');
  event.preventDefault()
  event.stopPropagation();
}



function effectLinkB(event) {
  if (divId.classList.contains('div_effect')) {
    divId.classList.remove('div_effect');
  } else  {
    divId.classList.add('div_effect');
  }

  event.preventDefault()
  event.stopPropagation();
}

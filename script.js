let numeros = Array.from(document.querySelectorAll('.numero'));
let pantalla = document.querySelector('.pantalla');
let clear = document.querySelector('.Clear');
let igual = document.querySelector('.Igual');
numeros.pop();
numeros.shift();
numeros.forEach((numero) => {
  numero.addEventListener('click', (e) => {
    pantalla.innerText += e.target.innerText;
  });
});
clear.addEventListener('click', () => {
  pantalla.innerText = '';
});
igual.addEventListener('click', () => {
  try {
    if (pantalla.innerText !== '') {
      pantalla.innerText = eval(pantalla.innerText);
    }
  } catch (error) {}
});

//Rotate 3d
let screen = [window.innerWidth, window.innerHeight];
let calculadora = document.querySelector('.calculadora');
window.addEventListener('mousemove', (e) => {
  let posX = e.clientX / screen[0];
  let posY = e.clientY / screen[1];
  let posRelX = posX < 0.5 ? 2 * (0.5 - posX) : 2 * -(posX - 0.5);
  let posRelY = posY < 0.5 ? 2 * -(0.5 - posY) : 2 * (posY - 0.5);
  //console.table(posRelX, posRelY);
  calculadora.style.transform = 'rotateY(' + 8 * posRelX + 'deg) rotateX(' + 8 * posRelY + 'deg)';
});
window.addEventListener('keydown', (e) => {
  var validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', , '0', '.', '/', '*', '-', '+', '(', ')'];
  if (e.key === 'Enter') {
    try {
      if (pantalla.innerText !== '') {
        pantalla.innerText = eval(pantalla.innerText);
      }
    } catch (error) {}
  } else if (e.key === 'Backspace') {
    let texto = [...pantalla.innerText];
    texto.pop();
    pantalla.innerText = texto.toString().replaceAll(',', '');
  } else if (validkeys.indexOf(e.key) >= 0) {
    pantalla.innerText += e.key;
  }
});

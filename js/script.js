let inputRangeVermelho = null;
let inputRangeVerde = null;
let inputRangeAzul = null;

let inputTextVermelho = null;
let inputTextVerde = null;
let inputTextAzul = null;

let divSquare = null;

let r = '0';
let g = '0';
let b = '0';

window.addEventListener('load', () => {
  mapearElementos();
  sync();
});

function mapearElementos() {
  inputRangeVermelho = document.querySelector('#inputRangeVermelho');
  inputRangeVerde = document.querySelector('#inputRangeVerde');
  inputRangeAzul = document.querySelector('#inputRangeAzul');

  inputTextVermelho = document.querySelector('#inputTextVermelho');
  inputTextVerde = document.querySelector('#inputTextVerde');
  inputTextAzul = document.querySelector('#inputTextAzul');

  divSquare = document.querySelector('#divSquare');

  inputRangeVermelho.addEventListener('input', alteraRange);
  inputRangeVerde.addEventListener('input', alteraRange);
  inputRangeAzul.addEventListener('input', alteraRange);
}

function alteraRange(event) {
  const value = event.target.value;
  const id = event.target.id;

  switch (id) {
    case 'inputRangeVermelho':
      r = value;
      break;
    case 'inputRangeVerde':
      g = value;
      break;
    case 'inputRangeAzul':
      b = value;
      break;

    default:
      break;
  }

  sync();
}

function sync() {
  divSquare.style.backgroundColor = `rgb(${r},${g},${b})`;

  inputTextVermelho.value = r;
  inputTextVerde.value = g;
  inputTextAzul.value = b;
}

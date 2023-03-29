const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const sumaImputs = calculo1.value + calculo2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}




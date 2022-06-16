const body = document.querySelector('body');
const btn = document.querySelector('.b')
const inputElem = document.querySelector('#a');

let val = "";

btn.addEventListener('click', getInput);

function getInput(event) {
    val = inputElem.value;

    const container = document.createElement('div');
    const textElem = document.createElement('span');
    const btn1 = document.createElement('button');
    btn1.setAttribute('class', 'btnDel');

    btn1.innerHTML = '삭제';
    textElem.innerHTML = val;
    
    container.appendChild(textElem);
    container.appendChild(btn1);
    body.appendChild(container);

    inputElem.value = "";
}
function removeVal(event) {
    if(event.target.className !== 'btnDel') return;
    const del = event.target.parentElement;
    del.remove();
}

body.addEventListener('click',removeVal)
/* const btn = document.querySelector('.b');
btn.addEventListener('click', showConsole)
function showConsole() {
    console.log(btn);
} */

const body = document.querySelector('body');
const btn = document.querySelector('.b')
const inputElem = document.querySelector('#a');

let value = "";

btn.addEventListener('click', getInput);

function getInput(event) {
    value = inputElem.value;
    const textElem = document.createElement('span');
    const container = document.createElement('div');
    const btn1 = document.createElement('button');

    btn1.innerHTML = '삭제';
    textElem.innerHTML = value;
    
    //const sum = container.appendChild(textElem,btn1);

    container.appendChild(textElem);
    container.appendChild(btn1);
    body.appendChild(container);

    inputElem.value = "";
}



/*
document.createElement()
- 지정한 HTML 요소를 만들어 반환    

document.createTextNode()   
- 선택한 요소에 텍스트를 추가

부모노드.appendChild(child)
- 선택한 부모노드에 자식요소를 

부모노드.insertBefore(삽입 할 노드, 기준 점 노드)
- 부모노드이 기준 점 노드 앞에 삽입 할 노드를 삽입
*/
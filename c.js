/* const btn = document.querySelector('.b');
btn.addEventListener('click', showConsole)
function showConsole() {
    console.log(btn);
} */

const input = document.getElementById('a');
input.addEventListener('change', getInput)

function getInput(event) {
    //console.log(event.target.value);
    document.getElementById('c').innerHTML=event.target.value;
    input.value = "";
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
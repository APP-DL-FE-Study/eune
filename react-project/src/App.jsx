import './App.css';
import {useState} from 'react';
function App() {
  const [a,A] = useState(1);
  //useState 사용하여 a의 값을 1로 고정
  //A는 a의 값을 리로딩하기 위한 함수임(버튼을 누를때마다 바꾸기 위해)
  const clicked = () => {
    A(a+1);
  }
  //함수 clicked는 함수A를 발생
  return (
    <div>
      <span></span>
      <button onClick={clicked}>{a}</button>
      {/* <input id="inputA" type="text"/>
      <button id="btnA">입력</button> */}
    </div>
  );
}

export default App;  
//디폴트를 해줘야 다른 파일에서 임폴트 해서 사용할 수 있음

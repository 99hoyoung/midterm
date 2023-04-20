import './App.css';
import React, { useState } from 'react';

function App() {
  const [fruit, setfruit] = useState('');
  const apple = a => {
    setfruit("사과");
  }
  const banana = a => {
    setfruit("바나나");
  }
  const orange = a => {
    setfruit("오렌지");
  }
  return (
    <div className="App">
      <h1>어떤 과일을 좋아하나요? {fruit} </h1>
      <button onClick = {apple}>사과</button>
      <button onClick = {orange}>오랜지</button>
      <button onClick = {banana}>바나나</button>
    </div>
  );
}
export default App;
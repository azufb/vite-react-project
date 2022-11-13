import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sampleState, sampleState2 } from './recoil/sampleAtom';
import { sampleSelector, sampleSelector2 } from './recoil/sampleSelector';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function App() {
  const [count, setCount] = useState(0);
  const sampleVal = useRecoilValue(sampleState);
  const sampleSel = useRecoilValue(sampleSelector);
  const setSmpleSt2 = useSetRecoilState(sampleSelector2);
  const sample2Val = useRecoilValue(sampleState2);


  return (
    <div className="App">
      <p>Atom: {sampleVal}</p>
      <p>Selector: {sampleSel}</p>
      <p>sample2Val：</p>
      {sample2Val.map((val, index) => (
        <p key={index}>{val.item}</p>
      ))}
      {sampleVal.map((val, index) => (
        <button onClick={() => setSmpleSt2(val)} key={index}>{val}</button>
      ))}
    </div>
  )
}

export default App

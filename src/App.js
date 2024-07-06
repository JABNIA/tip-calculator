import { useState } from 'react';
import './App.css';
import Calculator from './components/calculator';
import Display from './components/display'


function App() {
  
  const [bill, setBill] =useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState(0)
  const tipAmount =((bill * tip) /100) 
  
  const total = countTotal(bill);
  console.log(tipAmount, total)
  const totalPerPerson = total/people !== Infinity ? total/people : 0
  const tipPerPerson = tipAmount/people !== Infinity ? tipAmount/people : 0

  function countTotal(bill) {
    if((parseInt(bill) + tipAmount) !== Infinity){
      return parseInt(bill) + tipAmount
    }else{
      return "Err"
    }
    
    
  }
  
  return (
    <div id="container">
      <div id="splitter-container">

      <h2 id="splitter">SPLI TTER</h2>
      </div>
      <div id="calculator-wrapper">
      <Calculator bill={bill} people={people} tip={tip} setBill={setBill} setPeople={setPeople} setTip={setTip}/>
      <Display billPerPerson={totalPerPerson} tipPerPerson={tipPerPerson} setBill={setBill} setPeople={setPeople} setTip={setTip} />
      </div>
    </div>
  );
}

export default App;

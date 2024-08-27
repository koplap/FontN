import logo from './logo.svg';
import './App.css';
import Button from './Botton';
import { useState } from 'react'; 

function App() {
const [count, setCount] = useState(10);

  const name = "Kopalp Kaewwongsa";

  const employee = [ 
    { name: "AAAA", email : "aaaa@gmail.com", age: 19},
    { name: "BBBB", email : "bbbb@gmail.com", age: 18},
    { name: "CCCC", email : "cccc@gmail.com", age: 20},
  ]

  console.log(employee);


  return (
    <>
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>


      {employee.map((em, index) => (
        <li key={index}>
          ชื่อพนักงาน: {em.name} | อีเมล : {em.email} | อายุ : {em.age}
          </li>
      ))
      }

      <h1>Hello {name}</h1>
      <Button text = "OK"/>
      <Button text = "Cancel"/>
    </div>
    <h1 className="text01">Test</h1>
    </>
  );
}

export default App;

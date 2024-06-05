import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let str = "Hello"
  // let str2 = "world"

  // if(str === "Hello" && str2 === "world")
  //   {
  //     console.log("hello world")
  //   }
//   
// const student = {
//   student_name: "saifee",
// }
// const student2 = {
//   student_name: "saifee",
// }

// const fun = () =>{
//   console.log(1+5)
// }
// if(student.student_name === student2.student_name)
//   {
//     fun()
//   }
//   else{
//     console.log("hello world")
//   }
const student = [
  {name: "saifee", age:30},
  {name: "saif", age:75},
  {name: "imran", age:70},
];

// for(let item of people){
//   console.log(item.name)
// };

// people.forEach((person) =>
//   {
//     // console.log(person.name)
// });
// const employee = {
//   name: "puja",
//   age: 89,
//   occupation: "hmmm....",
// };
// console.log(employee.name);
 
 const employee = [
   { name: "saifee", age: 22, salary: 55} ,
   { name: "saif", age: 23, salary: 55},
   { name: "imaran", age: 22, salary:55},
 ];
const mappedemployeea = employees.map((item) => {
 console.log("item", item);

      return {
        ...item,
        salary: item.salary +100,
      };
    },[]);
console.log("employees", employee);
console.log("mappedEmployees",mappedEmployees);

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

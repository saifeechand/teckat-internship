import logo from './logo.svg';
import './App.css';

function App() {
  // let str = "Hello"
  // let str2 = "world"

  // if(str === "Hello" && str2 === "world")
  //   {
  //     console.log("hello world")
  //   }
//   
const student = {
  student_name: "saifee",

}
const student2 = {
  student_name: "saifee",
}

const fun = () =>{
  console.log(1+5)
}
if(student.student_name === student2.student_name)
  {
    fun()
  }
  else{
    console.log("hello world")
  }


    return (
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

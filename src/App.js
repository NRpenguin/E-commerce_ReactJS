import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


const HolaApp = () => {
  return(
    <p>Hola</p>
  )
}


function App() {
  const [state, setstate] = useState(0)

  function sumar() {
    setstate(state + 1)
  }

  function restar() {
    if(state != 0){
      setstate(state - 1)
    }
  }

  return (
    <div className="App">
      <NavBar/>
      <button onClick={restar}>-</button>
      {state}
      <button onClick={sumar}> + </button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount'


const HolaApp = () => {
  return(
    <p>Hola</p>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount min= {0} max={5}/>
    </div>
  );
}

export default App;

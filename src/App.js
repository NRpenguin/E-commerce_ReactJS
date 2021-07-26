import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const HolaApp = () => {
  return(
    <p>Hola</p>
  )
}

const obj = [
  {
    nombre: "emiliano",
    edad: 37
  },
  {
    nombre: "ismael",
    edad: 24
  }
]

const task = new Promise ((res, rej) => {
  let valor= 200
  setTimeout(()=>{
    if(valor=200){
      res(obj)
    }
  })
})

task.then((data)=>{
  return data
}).catch(err =>{
  console.log(err)
  return err
})

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="itemListContainer" />
    </div>
  );
}

export default App;

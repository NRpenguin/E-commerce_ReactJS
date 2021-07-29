import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


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
      <Router>
        <Switch>
          <div className="App">
            <NavBar/>
            <Route exact path="/">
              <ItemListContainer greeting="itemListContainer" />
            </Route>
            <Route exact path="/category1/:destacadosId">
              <ItemListContainer greeting="itemListContainer" />
            </Route>
            <Route exact path="/category2/:ofertasId">
              <ItemDetailContainer />
            </Route>
          </div>
        </Switch>
      </Router>
  );
}

export default App;

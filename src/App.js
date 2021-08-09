import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import UseCartContext, {CartContext} from './components/context/CartContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect, useState, createContext ,useContext } from 'react';
/* 
const notiItem= {
  titulo:"hola",
  subTitulo:"SubHola",
  parrafo:"parrafo"
}

function Detail (){
  const {noti} = useContext(CartContext)

  return(
    <div>
      <h1>{noti.titulo}</h1>
      <h2>{noti.subTitulo}</h2>
      <p>{noti.parrafo}</p>
    </div>
  )
}

function PintarDetail() {
  return(
    <Detail/>
  )
} */

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
  /*const [noti, setNoti] = useState({})
  useEffect(() => {
    setNoti(notiItem)
  }, [])
  console.log(noti)
 */
 {/* <div>
      <CartContext.Provider value={{noti}}>
        <PintarDetail/>
      </CartContext.Provider>  
    </div> */}
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar/>
          <Route exact path="/">
            <ItemListContainer greeting="itemListContainer" />
          </Route>
          <Route exact path="/category/:destacadosId">
            <ItemListContainer greeting="itemListContainer" />
          </Route>
          <CartContext.Provider>
            <Route exact path="/item/:ofertasId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/Cart">
              <Cart />
            </Route>
          </CartContext.Provider>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

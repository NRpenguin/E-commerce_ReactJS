import {useState, useEffect} from 'react'
import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { cleanup } from '@testing-library/react'
import ItemDetailContainer from './ItemDetailContainer'


function ItemListContainer({greeting}) {
    const [productosInfo, setProductosInfo] = useState([])
    useEffect(() => {

        const prod = [
            {
                nombre:"Despensero Micro Muro",
                precio: 600 ,
                imagen: '/assets/img/productos/1.jpg',
                id: 1
            },
            {
                nombre:"BAHIUT Muro Vertical",
                precio: 523,
                imagen: '/assets/img/productos/2.jpg',
                id: 2
            },
            {
                nombre:"Hindu Muro",
                precio: 843,
                imagen: '/assets/img/productos/3.jpg',
                id: 3
            },
            {
                nombre:"Rrack Muro Vertical",
                precio: 203,
                imagen: '/assets/img/productos/4.jpg',
                id: 4  
            }
        ]
        
        const getPromiseTask = () =>{
            return task
        }

        const task = new Promise ((res, rej) => {
        let valor= 200
        setTimeout(()=>{
            if(valor=200){
            res(prod)
            }
        }, 3000)
        })

        getPromiseTask()
        task.then((data)=>{
           return (setProductosInfo(data))
        })
        .catch(err =>{
            console.log(err)
            return err
        })

    }, [])
    

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount min= {0} max={5}/>
            <ItemList  itemProd={productosInfo} />
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer

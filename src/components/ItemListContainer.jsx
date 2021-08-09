import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import React from 'react'
import ItemList from './ItemList'
import { cleanup } from '@testing-library/react'


function ItemListContainer({greeting}) {
    const [productosInfo, setProductosInfo] = useState([])
    const [loading, setLoading] = useState (false) 
    const {destacadosId} = useParams()
    /* let pasar=parseInt(destacadosId) */

    useEffect(() => {
        const prod = [
            {
                nombre:"Despensero Micro Muro",
                precio: 600 ,
                imagen: '/assets/img/productos/1.jpg',
                categoria: 1,
                id: 1
            },
            {
                nombre:"destacados",
                precio: 523,
                imagen: '/assets/img/productos/2.jpg',
                categoria: 1,
                id: 2
            },
            {
                nombre:"Hindu Muro",
                precio: 843,
                imagen: '/assets/img/productos/3.jpg',
                categoria: 2,
                id: 3
            },
            {
                nombre:"Rrack Muro Vertical",
                precio: 203,
                imagen: '/assets/img/productos/4.jpg',
                categoria: 2,
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

        if(destacadosId === undefined){
            getPromiseTask()
            task.then((data)=>{
               return (setProductosInfo(data))
            })
            .catch(err =>{
                console.log(err)
                return err
            }) 
        }else{
            getPromiseTask()
            task.then((data)=>{
            return (setProductosInfo(data.filter(it =>it.categoria !== parseInt(destacadosId))))
            })
            .catch(err =>{
                console.log(err)
                return err
            })
        }

    }, [destacadosId])


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList  itemProd={productosInfo} />
        </div>
    )
}

export default ItemListContainer

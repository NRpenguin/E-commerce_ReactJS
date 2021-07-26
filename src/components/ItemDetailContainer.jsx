import React from 'react'
import {useState ,useEffect} from 'react'
import Item from './Item'

function ItemDetailContainer() {
    const [state, setstate] = useState([])
    
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
                res(prod.filter((el)=>{
                    return el.id === 1
                }))
            }
        }, 2000)
        })

        getPromiseTask()
        task.then((data)=>{
           return setstate(data)
        })
        .catch(err =>{
            console.log(err)
            return err
        })

    }, [])
    
    console.log(state)

    return (
        <div>
            
        </div>
    )
}

export default ItemDetailContainer

import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SliderItemList from './Slider/SliderItemList'
import {getFirestore} from '../FireBase/fireBase'

function ItemListContainer({greeting}) {
    const [productosInfo, setProductosInfo] = useState([])
    const {catId} = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()
        const query= catId ?
            dbQuery.collection('Libros').where('Categoria','==', catId)
        :
            dbQuery.collection('Libros') 

        /* Para que se usa const query */    
        query.get().then (
            resp => setProductosInfo(resp.docs.map(prod => ({...prod.data(), id: prod.id})))
        )
    }, [catId])

    return (
        <section className="page-section">
            <h1>{greeting}</h1>
            <SliderItemList  itemProd={productosInfo}/>
        </section>
    )
}

export default ItemListContainer

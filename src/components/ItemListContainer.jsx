import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import SliderItemList from './Slider/SliderItemList'
import {getFirebaseFirestore} from '../FireBase/fireBase'
import { collection, query as fQuery, where, getDocs } from 'firebase/firestore'

function ItemListContainer({greeting}) {
    const [productosInfo, setProductosInfo] = useState([])
    // definicion de segmento dinamico de la URL
    const {catId} = useParams()

    useEffect(() => {
        // referencia a la base de datos
        const db = getFirebaseFirestore()

        // traduccion de la pregunta: catdId tiene valor? (no es una asignacion)
        const colRef = catId  
            //si : colref muestra resultados filtrados por categoria
            ? fQuery(collection(db, 'Libros'), where('Categoria', '==', catId))
            //no : colref es toda la coleccion
            : collection(db, 'Libros') 

        // busca valor de colRef
        getDocs(colRef)
            //recorre resp.docs(array) y devuelve sus objetos con id y data
            .then(resp => setProductosInfo(resp.docs.map(doc => ({...doc.data(), id: doc.id}))))
            .catch(err => console.error('Firestore error:', err))
    }, [catId])

    return (
        <section className="page-section">
            <h1>{greeting}</h1>
            <SliderItemList  itemProd={productosInfo}/>
        </section>
    )
}

export default ItemListContainer
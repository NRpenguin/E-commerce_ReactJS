import {useParams} from 'react-router-dom'
import {useState ,useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {getFirestore} from '../FireBase/fireBase'


function ItemDetailContainer() {
    const [itemDet, setitemDet] = useState([])
    const {ofertasId} = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()
        const obtenerLibros = dbQuery.collection('Libros').doc(ofertasId).get().then((resp) =>{
            /* console.log(resp.docs) === Undefined */
            setitemDet({ id: resp.id, ...resp.data() });
        })
        /* id: Los dos puntos que significan?  */
    }, [ofertasId])
    return (
        <div>
            <ItemDetail itemDet={itemDet}/>
        </div>
    )
}

export default ItemDetailContainer

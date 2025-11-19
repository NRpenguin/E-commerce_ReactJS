import {useParams} from 'react-router-dom'
import {useState ,useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {getFirebaseFirestore} from '../FireBase/fireBase'
import { doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
    const [itemDet, setitemDet] = useState({})
    const ItemId = useParams()

    useEffect(() => {
        const db = getFirebaseFirestore();

        //buscar coleccion y luego id del item (solo va a traer un item)
        const docRef = doc(db, "Libros", ItemId.id);

        //getDocs lee informacion recolectada y
        getDoc(docRef).then((resp) => {
            if (resp.exists()) {
                setitemDet({ id: resp.id, ...resp.data() });
            }
        }).catch((err) => console.error(err));

    }, [ItemId]);
    return (
        <div> 
            <ItemDetail itemDet={itemDet}/>
        </div>
    )
}

export default ItemDetailContainer
 


import ProdListA from './ProdListA'
import ProdListB from './ProdListB'
import {useState, useEffect} from 'react'
import {getFirebaseFirestore} from '../../FireBase/fireBase'



function ProdList() {
    const [prodNovedades, setProdNovedades] = useState([])
    const [prodMasVendidos, setProdMasVendidos] = useState([])
    
    useEffect(() => {
        const dbQuery = getFirebaseFirestore()
        dbQuery.collection('LibrosNovedades').get().then (
            resp => setProdNovedades(resp.docs.map(prod => ({...prod.data(), id: prod.id})))
        )
    }, [])

    useEffect(() => {
        const dbQuery = getFirebaseFirestore()
        dbQuery.collection('LibrosMasVendidos').get().then (
            resp => setProdMasVendidos(resp.docs.map(prod => ({...prod.data(), id: prod.id})))
        )
    }, [])

    return (
        <section className="page-section">
            <ProdListA prodNovedades={prodNovedades} />
            <ProdListB prodMasVendidos={prodMasVendidos}/>
            <button className="buttonAtbottom button">Muestrame Mas</button>
        </section>
    )
}

export default ProdList

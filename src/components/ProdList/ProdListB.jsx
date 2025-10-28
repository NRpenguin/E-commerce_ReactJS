function ProdListB({prodMasVendidos}) {
    return(
        <div className="sideBySideB">
            <div className="shapeB noLight">
                <h1 className="visible-letter">Mas vendidos</h1>
                <hr />
                {prodMasVendidos.map((prod)=>{
                    return(
                        <div className="distance start" key={prod.id}>
                            <img src={prod.imagen} alt="" height="100px" width="100px"/>
                            <div className="wrap">
                                <p className="visible-letter">{prod.Nombre}</p>
                                <p className="visible-letter">{prod.Precio}</p>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}

export default ProdListB

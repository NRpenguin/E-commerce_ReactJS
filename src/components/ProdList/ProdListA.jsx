import React from 'react'

function ProdListA({prodNovedades}) {
    return (
        <div className="sideBySideA" >
            <div className="shapeA noLight">
                <h1 className="visible-letter">Novedades</h1>
                <hr />
                {prodNovedades.map((prod)=>{
                    return(
                        <div className="distance start" key={prod.id}>
                            <img src={prod.imagen} alt="" height="100px" width="100px" />
                            <p className="visible-letter">{prod.Nombre}</p>
                            <br />
                            <p className="visible-letter">{prod.Precio}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProdListA

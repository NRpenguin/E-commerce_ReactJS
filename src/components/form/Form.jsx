import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Form() {
    const { cart } = useContext(CartContext)

    function stockAlcanzado() {
        //ambas constantes devuelven nuevas arrays con la informacion pedida
        const quantity = cart.map(elem => elem.quantity)
        const maxStock = cart.map(elem => elem.item.maxStock)

        //.some revisa cada elemento de la array quantity y si devuelve alguno que cumpla con los parametros establecidos entra en el if
        //los parametros son "num"(que simboliza la quantity del item) y "i" que simboliza el indice que utilizamos para señalizar a la array "maxStock" en que posicion se debe ubicar para que sea la misma que en
        //quantity
        if ( quantity.some((num, i) => num > maxStock[i]) ) {
            console.log("max-Stock superado")
        }else{
            console.log("gracias por comprar")
        }
    }
    
    return (
        <div>
            <section className="page-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase text-muted-2">Formulario</h2>
                    </div>
                    <form action="" id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                                <div className="form-group padding0">
                                    <input className="form-control" id="name" type="text" placeholder="Nombre y apellido *" required="required" data-validation-required-message="por favor, introduzca su nombre y apellido." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group padding0">
                                    <input className="form-control" id="direction" type="text" placeholder="Direccion" required="required " data-validation-required-message="Por favor introduzca su numero de contacto. " />
                                    <p className="help-block text-danger "></p>
                                </div>
                                <div className="form-group padding0 align-form">
                                    <input className="form-control " id="ciudad" type="text" placeholder="Ciudad" required="required " data-validation-required-message="Por favor introduzca su direccion. " />
                                    <input className="form-control " id="ciudad" type="text" placeholder="Estado/Provincia" required="required " data-validation-required-message="Por favor introduzca su estado/provincia. " />
                                    <input className="form-control " id="ciudad" type="text" placeholder="Codigo Postal" required="required " data-validation-required-message="Por favor introduzca su codigo postal. " />
                                    <p className="help-block text-danger "></p>
                                </div>
                                <div className="form-group padding0">
                                    <input className="form-control" id="email" type="email" placeholder="Correo electronico" required="required " data-validation-required-message="Por favor introduzca su correo electronico. " />
                                    <p className="help-block text-danger "></p>
                                </div>
                            </div>
                    </form>
                    {/* este div deberia ir dentro del form pero si se mueve ahi, refresca la pagina y no deja ver los console.log */}
                    <div className="text-center ">
                        <button onClick={stockAlcanzado} className="btn btn-primary btn-xl text-uppercase " id="sendMessageButton " type="submit ">Comprar</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Form

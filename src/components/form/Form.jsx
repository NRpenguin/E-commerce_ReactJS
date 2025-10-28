function Form() {
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
                        <div className="text-center ">
                            <div id="success "></div>
                            <button className="btn btn-primary btn-xl text-uppercase " id="sendMessageButton " type="submit ">Comprar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form

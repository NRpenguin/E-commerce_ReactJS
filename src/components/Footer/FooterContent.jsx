function FooterContent() {
    return (
        <div>
            <footer className="page-section footer">
                <div className="row-footer">
                    <div className="col-lg-4 text-lg-left padding-left1">@2021 Rewe y su familia de compañias afiliadas. <br/> Todos
                        los derechos reservados.</div>
                    <div className="col-lg-4 my-3 my-lg-0 padding-left2">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/muebleriarewe"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/muebleriarewe/"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <ul className="list">
                            <li>
                                <a className="link-style mr-3" href="#!">Politica de privacidad</a>
                            </li>
                            <li>
                                <a className="link-style" href="#!">Terminos de uso</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterContent

import { useEffect, useRef } from "react";
import Glider from "glider-js";
import "glider-js/glider.min.css";
import Item from '../Slider/Item'


//esta funcion renderiza la lista completa de items dentro del slider

function SliderItemList({itemProd}) {
    // Cuando el componente se renderice esta linea de codigo va a servir como indicador para ejecutar codigo en el contenedor del glider
    const gliderRef = useRef(null);

    useEffect(() => {
        // si el ref no existe o la lista está vacía NO iniciar glider
        if (!gliderRef.current || itemProd.length === 0) return;

        // Glider config y inicializacion
        const glider = new Glider(gliderRef.current, {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: ".swiperOfertas__indicador",
            arrows: {
                prev: ".swiperOfertas__anterior",
                next: ".swiperOfertas__siguiente",
            },
        });

        //Desactiva el slider de forma segura. esto evita que la app se rompa cuando cambies de página y vuelvas (siempre se va a iniciar desde 0)
        return () => {
            try {
                glider.destroy();
            } catch (e) {}
        };
    }, [itemProd]);

    return (
        /* Swiper */
        <div className="container">
            <div className="swiper"> 
                <div className="swiperOfertas__contenedor">
                    <button aria-label="anterior" className="swiperOfertas__anterior">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    {/* "ref" marca donde se debe inicializar el glider */}
                    <div className="swiperOfertas__lista glider" ref={gliderRef}>
                        {itemProd.map((item, i) => (
                            <Item key={i} itemProd={item} />
                        ))}
                    </div>
                    <button aria-label="siguiente" className="swiperOfertas__siguiente">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div role="tablist" className="swiperOfertas__indicador"></div>
            </div>
        </div>
    )
}

export default SliderItemList

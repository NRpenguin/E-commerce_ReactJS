import React from 'react'
import Item from '../Slider/Item'

function SliderItemList({itemProd}) {
    return (
        /* Swiper */
        <div className="container">
            <div className="swiper"> 
                <div className="swiperOfertas__contenedor">
                    <button aria-label="anterior" className="swiperOfertas__anterior">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="swiperOfertas__lista">
                        <Item itemProd={itemProd} />
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

import {NavLink} from 'react-router-dom'


//esta funcion simboliza cada item individualmente estos luego se reflejan al doc padre SliderItemList, son metidos en una array y renderizados alli dentro del slider 

function Item({itemProd}) {
    //Evitar errores si itemProd es undefined o null 
    if (!itemProd) return null; 

    return (
        <div className="swiperOfertas__elemento item-distance">
            <NavLink to={`/item/${itemProd.id}`} className="navbar-brand">
                <img
                    src={itemProd.Imagen}
                    alt={itemProd.Nombre}
                    height="300px"
                    width="224px"
                />
                <p className="padding-null">{itemProd.Nombre}</p>
                <p className="padding-null">${itemProd.Precio}</p>
            </NavLink>
        </div>
    );
}

export default Item

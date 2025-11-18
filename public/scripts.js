/*  window.addEventListener('load', function() {
    new Glider(document.querySelector('.swiperOfertas__lista'), {
        slidesToShow: 4,
        slidesToScroll: 2,

        dots: '.swiperOfertas__indicador',

        arrows: {
            prev: '.swiperOfertas__anterior',
            next: '.swiperOfertas__siguiente'
        }
    }) 
    new Glider(document.querySelector('.swiperOfertas__lista'), {
      slidesToShow: 4,
      slidesToScroll: 2,
      draggable: true,
      dots: '.swiperOfertas__indicador',
      arrows: {
        prev: 'swiperOfertas__anterior',
        next: '.swiperOfertas__siguiente'
      },
    });
}) */

/* Slider 
document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.querySelector('.swiperOfertas__lista');
   
    if (!el) {
        console.warn("No existe el contenedor .swiperOfertas__lista");
        return;
    } 

    // este slider utiliza clases del documento sliderItemList.jsx en carpeta src/components/Slider/SliderItemList.jsx
    new Glider(el, {
      slidesToShow: 4,
      slidesToScroll: 2,

      dots: '.swiperOfertas__indicador',
      
      arrows: {
        prev: '.swiperOfertas__anterior',
        next: '.swiperOfertas__siguiente'
      },
    });
  });*/


/* Seccion Carrito */

let quitarCarritoBotones = document.getElementsByClassName('remover-carrito');
for (let boton of quitarCarritoBotones){
    boton.addEventListener('click', (evt)=>{quitarProductoCarrito(evt)});
}

function quitarProductoCarrito(evt) {
    let producto, productoID;
    if (evt.target.classList.contains('remover-carrito')){
        evt.target.parentElement.parentElement.remove();
       producto = evt.target.parentElement.parentElement;
       productoID = producto.querySelector('button').getAttribute('data-id');
       
    }
    
}

/* Eliminar todos los productos 
const traerBtn = document.querySelector('#eliminarTodo')
const traerID = document.querySelector('#Agregar')
traerBtn.addEventListener('click', quitarProductosCarrito)
function quitarProductosCarrito(evt){
    while(traerID.firstChild){
        traerID.removeChild(traerID.firstChild);
    }
    return false
}*/
import React from 'react';
import '../assets/css/Producto.css';
import '../assets/css/Item.css';
import img from '../assets/statics/img1.jpg';

export default function Producto() {
  return (
   <>
    <div className='detalle'>
      <img src={img} alt="" className='detalle-img'/>
      <h1 className='home-item-titulo'> Titulo item</h1>
      <p className='home-item-medidas'>Medidas 15*20</p>
      <div className='home-item-actions'>
        <h3 className='home-item-precio'>AR$150</h3>
        <a href="carrito.html">
          <button className='home-item-comprar'>+</button>
        </a>
      </div>
      <p>Bla bla bla</p>
    </div>
   </>
  )
}

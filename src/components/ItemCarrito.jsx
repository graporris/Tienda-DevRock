import React from 'react';
import '../assets/css/ItemCarrito.css';
import borrar from '../assets/statics/delete.svg';
import img from '../assets/statics/img1.jpg';


export default function ItemCarrito() {
  return (
   <>
    <div className="carrito-item">
      <img src={img} alt=""  className='carrito-item-img'/>
      <div className="carrito-txt">
        <h1 className="carrito-item-titulo">Titulo item</h1>
        <h3 className="carrito-item-precio">AR$ 150</h3>            
      </div>
      <img src={borrar} alt="" className="carrito-item-borrar" />
    </div>
   </>
  )
}

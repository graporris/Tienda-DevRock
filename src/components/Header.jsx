import React from 'react';
import iconoCarrito from '../assets/statics/cart.svg';
import iconoVolver from '../assets/statics/back.svg';

export default function Header() {
  return (
    <> 
    <a href="/carrito">
      <img src={iconoCarrito} alt="" className="carritou" />
    </a>
    <a href="">
      <img src={iconoVolver} alt="" className="volver"/>
    </a>
        
    <h1 className='titulo'>
      Dev <br />
      RockStore
    </h1>
    </>
  )
}

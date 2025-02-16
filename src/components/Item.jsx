import React from 'react';
import '../assets/css/Item.css';
import img from '../assets/statics/img1.jpg';
import Producto from '../containers/Producto';


export default function Item() {
  return (
    <>
    <div className='home-item'>
      <img src={img} alt="" className='home-item-img'/>
      <div className='home-item-info'>
        <a href='/producto'>
          <h1 className='home-item-titulo'>Pelota</h1>
        </a>
        <p className='home-item-medidas'>Medidas: 10x15</p>
        <div className='home-item-actions'>
          <h3 className='home-item-precio'>AR$ 150</h3>
          <button className='home-item-comprar'>+</button>
        </div>
      </div>
    </div>
    </>
  )
}

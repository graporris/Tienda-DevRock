import React , { useContext } from 'react';
import '../assets/css/Item.css';
import Producto from '../containers/Producto';
import Contexto from '../contexto/Contexto';

export default function Item(props) {
  const { nombre, precio, medidas, img } = props;
  const {agregarCarrito} = useContext(Contexto);
  return (
    <>
    <div className='home-item'>
      <img src={img} alt="" className='home-item-img'/>
      <div className='home-item-info'>
        <a href='/producto'>
          <h1 className='home-item-titulo'>{nombre}</h1>
        </a>
        <p className='home-item-medidas'>Medidas: {medidas}</p>
        <div className='home-item-actions'>
          <h3 className='home-item-precio'>AR${precio}</h3>
          <button className='home-item-comprar' onClick={() => {
            agregarCarrito("soy un item");
          }}>+</button>
        </div>
      </div>
    </div>
    </>
  )
}

import Contexto from "./Contexto";

export default function UsarContexto(props) {
    const { childrens } = props;
    const estadoInicial = {
        productos : [],
        carrito: [],
    }
    const listameProductos = async () => {};
    const agregarCarrito = () => {};
    const eliminarCarrito = () => {};

  return (
    <Contexto.Provider value={{
        productos: state.productos,
        carrito: state.carrito,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
    }} >
        {childrens}
    </Contexto.Provider>
  )
}

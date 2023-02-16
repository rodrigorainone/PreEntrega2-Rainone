import React from 'react';
import { Link } from 'react-router-dom';
import Itemlist from '../ItemList/Itemlist';

const Cart = () => {
    const carrito = [
        {id: 1, nombre: "Arroz", modelo: "1", img: 'apple-tv.jpg', precio: 400, cantidad: 5 },
        {id: 2,nombre: "Fideos", modelo: "2", img: 'apple-tv.jpg',precio: 300, cantidad: 2 },
        {id: 3,nombre: "Manteca", modelo: "3",img: 'apple-tv.jpg',precio: 500, cantidad: 3 },
    ]
    return (
        <>
            {carrito ===[]
            ?
                <>
                    <h2>Carrito Vacio</h2>
                    <Link className='nav-link' to={'/'}><button className="btn btn-dark">Continuar comprando</button> </Link>
                </>
            :
                <>
                     <div className="container cartContainer">
                    {
                        <Itemlist products={carrito} plantilla={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-danger">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
                
                </>} 
        </>
    );
}

export default Cart;

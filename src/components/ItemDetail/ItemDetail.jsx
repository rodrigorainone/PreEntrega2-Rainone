import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => { 
   
    return (
    <div className="row g-0">
        <div className="col-md-4">
                <img src={item.img} alt={`imagen de ${item.nombre}`} className="img-fluid rounded-star"/>

        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>                          
                <p className="card-text">Marca : {item.marca}</p>
                <p className="card-text">Precio : $ {item.precio}</p>
                <p className="card-text">Stock : {item.stock}</p>
                <ItemCount valInicial={1} stock={item.stock} precio={item.precio}  />                            
                <button className="btn btn-dark">Finalizar Compra</button> 
            </div>
        </div>            
    </div>
    );
}

export default ItemDetail;

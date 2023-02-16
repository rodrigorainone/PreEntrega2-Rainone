import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const CartWidget = ({cantCarrito}) => {
    return (
        <>
             <Link className="iconCar" aria-current="page"  to={"/cart"}><FontAwesomeIcon  icon={faCartShopping} /></Link>       
            <p className='text-white'>{cantCarrito}</p>            
        </>
    );
}

export default CartWidget;

import { Link } from "react-router-dom";
import React from "react";

const Categorias = React.memo(() => {
  
    return (        
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/category" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias 
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={"/category/Computadoras"}>Autos</Link></li>
              <li><Link className="dropdown-item" to={"/category/Celulares"}>SUV</Link></li>              
              <li><Link className="dropdown-item" to={"/category/Televisores"}>Camionetas</Link></li>
              <li><Link className="dropdown-item" to={"/category/Electronica"}>Utilitarios</Link></li>
            </ul>
        </li>       
    );
})

export default Categorias;

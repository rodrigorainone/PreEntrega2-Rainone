import { useState } from "react"

export const ItemCount = ({valInicial, stock,precio}) => {
    
  const [contador, setContador] = useState(valInicial)
            //Var       //Modificar var     //Estado inicial
 
    const sumar = () =>    (contador < stock) && setContador(contador + 1)//contador = contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else    
    
 
  return (
    <div>
        <button className="btn btn-dark" onClick={() =>restar()}>-</button>
        {contador}
        <button className="btn btn-dark" onClick={() =>sumar()}>+</button>    
        <p style={{display: contador>1? 'block' : 'none'}} >el valor final es : ${new Intl.NumberFormat('de-DE').format(contador*precio)}</p>
    </div>
  )
}

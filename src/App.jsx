import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { cargarBDD } from './firebase/firebase';
function App() {
  //cargarBDD();
  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>         
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
          <Route path='/category/:idCategoria' element={<ItemListContainer />} />    
          <Route path='/cart' element={<Cart/>} />      
        </Routes>
        <ToastContainer/>
     </BrowserRouter>
    </>    
  );
}

export default App;
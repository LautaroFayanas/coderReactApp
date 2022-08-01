import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemContainer } from './components/ItemDetails/ItemContainer';
import { CartProvider } from './context/useContext';
import { Cart } from './pages/Cart';
import { Contacto } from './pages/Contacto';
import { Detail } from './pages/Detail';
import { Formasdepago } from './pages/Formasdepago';
import { Tienda } from './pages/Tienda';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path=':categoryID' element={<ItemContainer />} > </Route> 
          <Route path=':categoryID/detail/:id/' element={<Detail />} />
          <Route path='/cart' element={<Cart />} /> 

          <Route path='/' element={<ItemContainer />}>
            <Route path='Tienda' element={<Tienda />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='FormasDePago' element={<Formasdepago />} />
          </Route>
          <Route path='detail/:id' element={<Detail />} />
          

        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;

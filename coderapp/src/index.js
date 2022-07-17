import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Tienda } from './pages/Tienda';
import { Formasdepago } from './pages/Formasdepago';
import { Contacto } from './pages/Contacto';
import { Detail } from './pages/Detail';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route path='detail/:id' element={<Detail /> }/>
        <Route path='Tienda' element={<Tienda /> }/>
        <Route path='Contacto' element={<Contacto />} />
        <Route path='FormasDePago' element={<Formasdepago />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


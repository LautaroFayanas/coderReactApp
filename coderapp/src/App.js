import React from 'react'
import { ItemContainer } from './components/ItemDetails/ItemContainer';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <li className='h5 mb-5'>Clase 6 y 7</li>
      <ItemContainer />
      <hr className='m-5 p-5'/> 
      <li className='h5 mt-5'>Clase 3,4 y 5</li>
      <ItemListContainer greeting={"Este es un Item List"} />
    </div>
  );
}



export default App;

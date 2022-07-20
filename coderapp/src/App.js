import React from 'react'
import { ItemContainer } from './components/ItemDetails/ItemContainer';
import { ItemListContainer } from './components/ItemList/ItemListContainer';


function App() {
  return (
    <div>
      <ItemContainer />
      <hr className='m-5 p-5'/> 
      <ItemListContainer greeting={"Este es un Item List"} />
    </div>
  );
}



export default App;

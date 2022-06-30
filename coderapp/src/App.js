import React from 'react'
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Este es un Item List"} />
    </div>
  );
}

export default App;

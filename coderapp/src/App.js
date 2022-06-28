import React from 'react'
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Este es un Item List"} />
    </div>
  );
}

export default App;

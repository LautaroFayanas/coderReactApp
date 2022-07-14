import React, { useEffect, useState } from 'react';
import { ItemCount } from './ItemCount/ItemCount';
import getData from '../../mock/products'; 
import { Itemlist } from './items/Itemlist';




export const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  function alertProductos(j) {
    if (j === 0) {
      alert('no podes agregar 0 produtos')
    } else {
      alert(`${j} productos agregados`)
    }
  };

  useEffect(() => {

    const getProducts = async () => {
      try {
        const response = await getData;
        setProducts(response);
      } catch (error) {
        console.log(error);
      } 
    };

    getProducts();

  }, []);

  return (
    <>
    
      <h1 className='h3 p-5 text-center'>
        {greeting}
        <ItemCount stock={5} initial={1} onAdd={alertProductos} />
        <Itemlist products={products} />
      </h1>

    </>

  )
}

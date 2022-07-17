import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

export const ItemContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
      fetch('https://fakestoreapi.com/products/')
        .then((res) => res.json())
        .then(data => {
          setProducts(data)
          }
        )
   
  }, [])
  
  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { Navbar } from '../Navbar/Navbar';

export const ItemContainer = () => {

  const {categoryID} = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
      fetch('https://fakestoreapi.com/products/')
        .then((res) => res.json())
        .then(data => {
          if(categoryID){
            setProducts(data.filter((p) => p.category === categoryID))
            
          }else{
            setProducts(data)
          }
          
          }
        )
   
  }, [categoryID])
  
  return (
    <div>
      <Navbar />
      <hr className=''/>
      <ItemList products={products} />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { Navbar } from '../Navbar/Navbar';
import { getProducts } from '../../firebase/firebase';

export const ItemContainer = () => {
  const [products, setProducts] = useState([]);

  const categoryID = useParams();
  console.log(categoryID);
  // const [loading,setLoading] = useState(true);

  useEffect(() => {

    getProducts().then((snapshot) => {
      console.log(
      setProducts(snapshot.docs.map((doc) => {
        return {
          id: doc.id, ...doc.data()
        }
      }))
      );

    });

  }, []);

  return (
    <div>
      <Navbar />
      <hr className='' />
      <ItemList products={products} />
    </div>
  )
}

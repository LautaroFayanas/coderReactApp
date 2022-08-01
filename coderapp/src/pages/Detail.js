import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../components/ItemList/ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { CartContext } from '../context/useContext'
import { getProductsByID } from '../firebase/firebase'



export const Detail = () => {

 const {addItem} = useContext(CartContext);
 const [product, setProduct] = useState([]);

  let params = useParams();
 
  useEffect(() => {
   getProductsByID(params.id).then((product) => setProduct(product))
  }, [params.id])

  return (
    <>
    <Navbar />
      <div className="container m-auto row align-items-center mt-5 text-dark">
        <div className="text-center card-box d-flex col-lg-7">
          <img className='m-auto rounded-5 w-50' src={product.url} alt={product.title} />
          <div className="card p-3  rounded-5 w-100 shadow-lg col-lg-4 offset-lg-1">
            <p className='h5 m-3'>{product.id} </p>
            <h1 className='h2 shadow-lg'>{product.Category} </h1>
            <p className='text-success h2 m-4'>${product.Price} </p>
            <p className='h5 mt-2'>Stock:{product.Stock} </p>
            <div>  { 
                  <ItemCount item={product} stock={5} initial={1} addItem={addItem}  /> 
                   }    
            </div>

            <Link to={'/cart'}>
              <button className='btn btn-success w-100 m-auto mt-3'> Finalizar Compra </button>
            </Link>
          </div>
        </div>
      </div>
        
    </>
  )
}

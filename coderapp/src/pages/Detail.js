import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../components/ItemList/ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const Detail = () => {

    let params = useParams()

    const [products, setProducts] = useState([]);
    const [add, setadd] = useState(false);

    const AddToCart = () =>{
      setadd(!add)
    }


    useEffect   (() => {
      
        fetch('https://fakestoreapi.com/products/'+ params.id)
          .then((res) => res.json())
          .then(json => {
            setProducts(json)
            console.log(json)
            })
     
    }, [ params.id ])

   
  return (
    <> 
    <div className="container col-lg-4 mt-5 text-dark">
      <div className="text-center card-box d-flex">
        <div className="card p-3 rounded-5 shadow-lg ">
          <img className='m-auto rounded-5 w-50' src={products.image} alt={products.title} />
          <p className='h5 m-3'>{products.id} </p>
          <h1 className='h2 shadow-lg'>{products.title} </h1>
          <p className='text-success h2 m-4'>${products.price} </p>
            <p className='h5 mt-2'>{products.description} </p>
           <div > 

            { add ? <p className='h2 m-2 text-success'> Añadido!  </p> : <ItemCount stock={5} initial={1} onAdd={AddToCart} /> }

           </div> 
           <Link to="/Cart">
                <button className='btn btn-success w-100 m-auto mt-3'> Finalizar Compra </button> 
           </Link>
        </div>
      </div>
    </div>
      
    </>
  )
}

import React, { useContext} from 'react'
import { CartContext } from '../context/useContext'
import '../context/cssCart/cart.css'
import { Navbar } from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export const Cart = () => {

  const { items , removeItem } = useContext(CartContext);

  return (
    <>
    <Navbar />
    
    <p className='h4 m-5'>Mis Productos: 
    {items == 0 ? <span className='p-4'> No tienes productos seleccionados <Link to={'/'}>Click Aqui</Link> para vovler a la tienda </span>  : null} </p>


      {items.map(({ item, counter }, index ) => {
  
        return (
          <div key={index} className="container m-auto align-items-center mt-5 text-dark mb-5">
            <div className="text-center m-auto d-flex w-100">
            <p className='h5 m-5 text-success'>
              Cantidad: 
              <span className='px-2'>
              {counter}
              </span>
            </p>
              <img className='m-auto CartImg' src={item.image} alt={item.title} />
              <div className="rounded-5 shadow-lg w-50 ">
                <h1 className='h5 shadow-lg'>{item.title} </h1>
                <p className='text-success h2 m-4'>${item.price * counter} </p>
                <p className='h5 mt-2'>Description: {item.description.slice(0, 50)} </p>
            <button onClick={() => removeItem(item.id)} className='m-5 text-danger btn-close'></button>
              </div>
            </div>
          </div>
        )
      
      })}
    </>
  )
}

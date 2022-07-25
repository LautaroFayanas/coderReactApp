import React, { useContext } from 'react'
import './styles/countt.css'
import imge from './img.png'
import { CartContext } from '../../context/useContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { items } = useContext(CartContext);

  let itemsInCart = 0

    items.map((c) => {
        itemsInCart = itemsInCart + c.counter;
      })




  
  return (
    <> 
      <Link className='ms-auto mx-4' to={'/cart'}>
        <button className='btn btn-success '>
    {itemsInCart > 0 ? 
          <div className='bg-danger rounded-5 counterStyleCart'>
            {itemsInCart}
          </div>
            : null}
          <div>
            <img className='imgCart' src={imge} />
          </div>
        </button>
      </Link>
  
      
    </>
  )
}

import React, { useContext } from 'react'
import './styles/countt.css'
import imge from './img.png'
import { CartContext } from '../../context/useContext'

export const CartWidget = () => {

  const {items} = useContext(CartContext);
  let itemsInCart = 0

  items.map((c)=>{
    itemsInCart = itemsInCart + c.counter;
  })

  return (
    <>
        <button className='btn btn-success ms-auto mx-4'>
          <div className='bg-danger rounded-5 counterStyleCart'>
          {itemsInCart}
          </div>
            <div> 
                  <img className='imgCart' src={imge} />
            </div>
        </button>

    </>
  )
}

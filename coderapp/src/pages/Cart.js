import React, { useContext } from 'react'
import { CartContext } from '../context/useContext'

export const Cart = () => {

  const { items } = useContext(CartContext)
  console.log(items);

  return (
    <>
      {items.map(({item} , index) => {
        (
          <div key={index}>
            {console.log(item.price)}
            <p> {item.price} </p>
          </div>
        )
      })}

      <p className='m-5 h3'>
        recibo la data pero no la imprimo
      </p>

    </>
  )
}

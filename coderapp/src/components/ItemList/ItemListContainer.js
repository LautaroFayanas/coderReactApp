import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'

export const ItemListContainer = ({greeting}) => {

  function alertProductos(j){
    if(j === 0){
      alert('no podes agregar 0 produtos')
    }else{
      alert(`${j} productos agregados`)
    }
  }

  return (
    <>
       <h1 className='h3 p-5 text-center'>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={alertProductos} />
       </h1>
        
    </>

  )
}

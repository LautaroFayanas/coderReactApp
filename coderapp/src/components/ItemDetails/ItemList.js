import React from 'react'
import { ItemD } from './ItemD'

const ItemList = ({products}) => {

  return (
    <div className='row '>
        {products.map((product) => <ItemD id={product.id} key={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />)}
    </div>
  )
}

export default ItemList
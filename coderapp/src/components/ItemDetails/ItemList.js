import React from 'react'
import { ItemD } from './ItemD'

const ItemList = ({products}) => {
  


  return (
    <div className='row '>
      
        {products.map((product) => 

        <ItemD 
        
        key={product.id} 
        id={product.id}
        Category={product.Category}
        image={product.url} 
        Stock={product.Stock}
        Price={product.Price} 
        />)}

    </div>
  )
}

export default ItemList
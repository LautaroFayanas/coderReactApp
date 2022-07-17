import React from 'react';
import { Item } from './Item';

export const Itemlist = ({products}) => {

  return (
    <div className="row ">
      {products.map(product => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  )
}

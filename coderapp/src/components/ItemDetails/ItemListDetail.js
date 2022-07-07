import React from 'react'
import { ItemD } from './ItemD'

export const ItemListDetail = ({detail}) => {
  return (
    <div>
        <div className='row'>
      {detail.map(detail => {
        return <ItemD key={detail.id} detail={detail} />;
      })}
    </div>
    </div>
  )
}

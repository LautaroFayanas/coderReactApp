import React from 'react'
import { ItemD } from './ItemD'

export const ItemListDetail = ({detail}) => {
  return (
    <div>
        <div className='row m-2'>
      {detail.map(detail => {
        return <ItemD key={detail.id} detail={detail} />;
      })}
    </div>
    </div>
  )
}

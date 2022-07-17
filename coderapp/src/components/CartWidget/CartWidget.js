import React from 'react'
import './styles/countt.css'
import imge from './img.png'

export const CartWidget = () => {
  return (
    <>
        <button className='btn btn-success ms-auto mx-4'>
        <div className='ms-auto bg-danger count'> 3</div> 
        <div>
        <img className='imgCart' src={imge} />
        </div>
        
        </button>

    </>
  )
}

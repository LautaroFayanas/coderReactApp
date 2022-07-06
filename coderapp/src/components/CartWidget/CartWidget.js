import React from 'react'
import './styles/countt.css'
export const CartWidget = ({count}) => {
  return (
    <>
        <button className='btn btn-success ms-auto mx-4'>
        <div className='count ms-auto bg-danger '>  {count}</div> 
        <div>
         
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </button>

    </>
  )
}

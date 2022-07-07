import React from 'react'
import './itemD.css'

export const ItemD = ({ detail }) => {
    
    const { title, id, description, price, stock, images } = detail;

    return (


        <div className=' container text-center mb-5 col-lg-4'> 
        <div className='card rounded-5 m-auto shadow-lg pb-2' >
            <img className='rounded-5 ' src={images} alt={title} />
            <p className='h5 m-2'>{id} </p>
            <h1 className='h2'> New <strong> {title} </strong>  </h1>
            <hr />
            <p className='h4'>-{description}-</p>
            <hr />
            <div className='d-flex m-auto p-2'> 
                <p className='h1 text-success'>${price}</p>   
                <p className='h5 mx-3 pt-1 text-center'>Stock: {stock} </p>
            </div>
            <a href="#" className="btn btn-dark w-50 m-auto rounded-5">View</a>
        </div>
        </div>
    )
}


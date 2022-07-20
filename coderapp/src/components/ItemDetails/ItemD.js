import React from 'react'
import { Link } from 'react-router-dom'
import './itemD.css'

export const ItemD = ({ id, title, image, description, price }) => {



    return (


        <div className="container col-lg-4  text-dark ">
            <div className="text-center card-box ">
                <div className="card p-3 rounded-5 shadow-lg m-5 ">
                    <img className='m-auto rounded-5 imageD' src={image} alt={title} />
                    <p className='h5 m-3'>{id} </p>
                    <h1 className='h2 shadow-lg'>{title.slice(0, 10)} </h1>
                    <p className='text-success h3'>${price} </p>
                    <p  className='h5'>  {description.slice(0, 48)} </p>
                    <Link to={'detail/' + id} className="btn btn-dark w-50 m-auto rounded-5">View</Link>
                </div>
            </div>
        </div>

    )
}



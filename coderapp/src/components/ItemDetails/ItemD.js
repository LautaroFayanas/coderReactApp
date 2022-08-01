import React from 'react'
import { Link } from 'react-router-dom'
import './itemD.css'

export const ItemD = ({ id, Stock, image, Category, Price }) => {


    
    return (


        <div className="container col-lg-4  text-dark ">
            <div className="text-center card-box ">
                <div className="card p-3 rounded-5 shadow-lg m-5 ">
                    <img className='m-auto rounded-5 imageD' src={image} alt={Category} />
                    <h1 className='h2 shadow-lg'>{Category} </h1>
                    <p className='text-success h3'>${Price} </p>
                    <p  className='h5'> Stock: {Stock} </p>
                    <Link to={'detail/' + id} className="btn btn-dark w-50 m-auto rounded-5">View</Link>
                </div>
            </div>
        </div>

    )
}



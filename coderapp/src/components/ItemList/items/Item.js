import React from 'react';

export const Item = ({product}) => {
  const { image, tittle, price ,description,category,id } = product;
  return (
    <div className="container col-lg-4 mt-5 g-5">
      <div className="text-center card-box">
        <div className="card p-3 rounded-5 shadow-lg">
          <img className='rounded-5' src={image} alt={tittle} />
          <p className='h5 m-3'>{id} </p>
          <h1 className='h2 shadow-lg'>{tittle} </h1>
          <p className='text-success'>${price} </p>
          <p className='h5'>{description} </p>
          <p className='h5 text-danger'>Categoria: <strong> {category} </strong>  </p>
        </div>
      </div>
    </div>
  )
}

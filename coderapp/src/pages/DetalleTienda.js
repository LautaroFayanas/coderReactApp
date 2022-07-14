import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../mock/products'

export const DetalleTienda = () => {
    let param = useParams()
    const [data, setdata] = useState('');

    useEffect(() => {

        const getProducts = async () => {
            try {
                const response = await getData + param.id;
                setdata(response);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();

    }, [param.id]);


    return (
        <div className="container col-lg-4 mt-5 text-decoration-none text-dark">
            <div className="text-center card-box d-flex justify-content-around">
                <div className="card p-3 rounded-5 shadow-lg">
                    <img className='rounded-5' src={data.image} alt={data.tittle} />
                    <p className='h5 m-3'>{data.id} </p>
                    <h1 className='h2 shadow-lg'>{data.tittle} </h1>
                    <p className='text-success'>${data.price} </p>
                    <p className='h5'>{data.description} </p>
                    <p className='h5 text-danger'>Categoria: <strong> {data.category} </strong>  </p>
                </div>
            </div>
        </div>
    )
}

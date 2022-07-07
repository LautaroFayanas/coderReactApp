import React, { useEffect, useState } from 'react'
import detalleData from '../../mock/detailsProduct';
import { ItemListDetail } from './ItemListDetail';

export const ItemContainer = () => {

  const [detail, setDetail] = useState([]);
    
  useEffect(() => {
   
   const getItem = async() =>{
    try{
      const obtenerData = await detalleData;
      setDetail(obtenerData)
    }catch(error){
      console.log(error)
    }}

   getItem();

  }, []);



  return (
  
      <h1>
          <ItemListDetail  detail={detail} />
      </h1>
    
  )
}

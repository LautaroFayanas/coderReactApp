import { useState } from 'react'

export const ItemCount = ({item,stock, initial , addItem}) => {

    const [counter, setCounter] = useState(initial);

    const incrementar = () =>{
        setCounter((valor) => (valor < 5 ? counter +1: counter));
       if(counter > 4){
        alert('No hay mas stock de este producto')
       }
    }
    
    const decremetar = () =>{
        setCounter((valor) => (valor > 1 ? counter -1: counter))
    }


  return (
    <>
        <p className ='mt-3 p-2 mb-3 text-white bg-dark rounded-5 w-50 m-auto '> {counter} </p>
        <button className='btn btn-dark m-1' onClick={decremetar}>-</button>
        <button className='btn btn-dark m-1' onClick={()=>{
            
            addItem({item,counter});

            
        }}>
            Añadir al carrito
        </button>
        <button className='btn btn-dark m-1' onClick={incrementar}> + </button> 
    </>
  )
}

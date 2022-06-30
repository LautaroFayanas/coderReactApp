import { useState } from 'react'

export const ItemCount = ({stock, initial , onAdd}) => {

    const [counter, setcounter] = useState(initial);

    const incrementar = () =>{
        setcounter((valor) => (valor < 5 ? counter +1: counter));
       if(counter > 4){
        alert('No hay mas stock de este producto')
       }
    }

    const decremetar = () =>{
        setcounter((valor) => (valor > 0 ? counter -1: counter))
    }


  return (
    <>
        <h1 className ='mt-5 text-danger bg-dark rounded-5 w-100 '> {counter} </h1>
        <button className='btn btn-dark m-2' onClick={decremetar}>-1</button>
        <button className='btn btn-dark m-2' onClick={()=>{
            if(counter <= stock){
                onAdd(counter);
            }
        }}>
            Agregar
        </button>
        <button className='btn btn-dark m-2' onClick={incrementar}> +1 </button> 
    </>
  )
}

import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  
   const [items, setItems] = useState([]);


   const addItem = (item) =>{
    setItems([...items, {...item }])
    
  
    
   }

   return(
    <CartContext.Provider value={{items,addItem}}>
      {children}
    </CartContext.Provider>
   )

}

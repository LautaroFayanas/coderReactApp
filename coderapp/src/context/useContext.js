import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  
   const [items, setItems] = useState([]);

  const isInCart = (id) =>{
      // const found = items.find(item => item.id === id);

      // return found ;
  }

  const removeItem = (id) =>{
       setItems(items.filter(item => item.id !== id))
       console.log(items);
  }
    
   const addItem = (item,counter) =>{
    // isInCart(item.id) ?
    
    // setItems(items.map((prod) =>{
    //   if(prod.id === item.id){
    //     console.log(prod);
    //   }
    //   return prod;
    // }))

    // :
    setItems([...items, {...item}])
    
   }


   return(
    <CartContext.Provider value={{items,addItem,removeItem}}>
      {children}
    </CartContext.Provider>
   )

}

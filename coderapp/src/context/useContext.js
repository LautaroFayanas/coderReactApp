import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [items, setItems] = useState([]);
  
  const isInCart = (id) => items.some(({ item }) => item.id === id);


  //Agrego los
  const addItem = (item, counter) => {

    const _items = isInCart(item.id)
  
     ? items.item.filter((el) =>
  
       el.item.id === item.id ? { counter: el.counter + counter , item } : el
  
      )
  
     : [...items, item];
  
    setItems(_items);

   };
  


  const removeItem = (id) => {
    setItems(items.filter(({ item }) => item.id !== id))
  }



  return (
    <CartContext.Provider value={ {addItem , removeItem , items ,isInCart} }>
      {children}
    </CartContext.Provider>
  )

}

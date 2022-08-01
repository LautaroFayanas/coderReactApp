import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [items, setItems] = useState([]);
  console.log(items);

  const isInCart = (id) => items.find(({ item }) => item.id === id);

  const addItem = ({counter, ...item}) => {

    setItems(
      isInCart(item.id) ? 
      items.map((item) => 
      item.item.id === item.id ?
      {...item, counter: item.counter + counter }: item )
      : [...items, {...item, counter}]
    )
  }

  //   const _items = isInCart(item.id)

  //   ? items.item.filter((el) =>

  //     el.item.id === item.id ? { counter: el.counter + counter , item } : el

  //    )

  //   : [...items, item];

  //  setItems(_items);

  const removeItem = (id) => {
    setItems(items.filter(({ item }) => item.id !== id))
  }



  return (
    <CartContext.Provider value={{ addItem, removeItem, items, isInCart }}>
      {children}
    </CartContext.Provider>
  )

}

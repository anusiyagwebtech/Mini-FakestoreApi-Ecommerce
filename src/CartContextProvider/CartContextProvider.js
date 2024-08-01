import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

function CartContextProvider({children}) {
  
 const [cart, setCart] = useState([]);
 const [ cartAmount, setCartAmount] = useState(0);
 const [ cartTotalAmount, setCartTotalAmount] = useState(0);


 
 const addToCart = (id, product) => {
  const newItem = {...product, amount: 1};

  const cartItem = cart.find((value, i) => {
    return value.id === id;
  });
  if(cartItem) {
    
    const updateCart = cart.map((value) => value.id === id ? {...value, amount: value.amount + 1} : value);
    setCart(updateCart);
    
  }else {
    setCart([...cart, newItem ]);

  }


 }

  console.log(cart);
    
  const removeFromCart = (id) => {
   const newItem =   cart.filter((item) => item.id !== id);
   setCart(newItem);
  }

  const clearCart = ()=> {
    setCart([]);
  }

  const increaseAmount = (id) => {
    const updateCart = cart.map((value) => 
      value.id === id ?
        {...value, amount: value.amount + 1} : value
    )
    setCart(updateCart);

  }

  const decreaseAmount = (id, obj) => {

  
    if(obj.amount > 1) {
      const updateCart = cart.map((value) => 
        value.id === id ?
          {...value, amount: value.amount - 1} : value
      )
      setCart(updateCart);

  
    }else {
      removeFromCart(id);
    }
    
  }

  useEffect(()=> {

    const amount =  cart.reduce((prev, current) => {
      prev = prev+ current.amount;
      return prev;
     }, 0);
     setCartAmount(amount);

     const totalAmount = cart.reduce((prev, current) => {
      prev = prev + current.amount*current.price;
      return prev;
     }, 0)
     setCartTotalAmount(totalAmount);

   }, [addToCart, decreaseAmount, increaseAmount, removeFromCart]);
  


  return (
    <CartContext.Provider value={{addToCart, cart, setCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, cartAmount, cartTotalAmount}}>

     {children}

     
    </CartContext.Provider>
  )
}

export default CartContextProvider;
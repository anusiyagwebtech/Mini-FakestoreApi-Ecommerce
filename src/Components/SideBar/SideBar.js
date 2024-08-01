import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../CartItem/CartItem';
import { SideBarContext } from '../../SidebarContextProvider/SidebarContextProvider';
import { CartContext } from '../../CartContextProvider/CartContextProvider';

function SideBar() {

    const {isOpen, setIsOpen, handleClose} =  useContext(SideBarContext);
    const {cart, clearCart, cartAmount, cartTotalAmount} = useContext(CartContext);

    



  return (
    <div className= {`sidebarContainer ${isOpen ? 'openSidebar' : 'closeSidebar'}`} >
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)', margin: '10px', borderRadius: '8px'}}>
        <div>Shopping Bag({cartAmount})</div>
      <div onClick={handleClose} style={{cursor: 'pointer', fontSize: '19px'}}>
        <IoMdArrowForward />
      </div>
      </div>
      <div className='scrollSidebar'>
       {
        cart && cart.map((cartItems) => {
          return (
           <CartItem key={cartItems.id} cartDetails={cartItems}/>
          )
        })
       }
      </div>
     
      <div className='cart-bottom'>
        <div className='strong'>Total: <span>$ {Number.parseFloat(cartTotalAmount).toFixed(2)}</span></div>
        <div onClick={clearCart} className=' back-center' ><FiTrash2/></div>
      </div>
      <div>
        <Link to={'/'} className='bg-dark-1 color-light-1 display-inline-block text-align-center py-10 w-full'>
        View Cart
        </Link>
      </div>
    </div>
  )
}

export default SideBar;
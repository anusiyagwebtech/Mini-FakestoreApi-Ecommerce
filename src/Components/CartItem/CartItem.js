import React, { useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContextProvider/CartContextProvider';

function CartItem({cartDetails}) {
  const {id, title, image, price, amount} = cartDetails;
  const {removeFromCart, addToCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  return (
    <div className='cartItem '>
      <div>
       <Link to={`product/${id}`}> <img src={image} /></Link>
      </div>
      <div className='flex-coloumn'>
         <div className='title-close'>
          <Link to={`product/${id}`} className='anchor-underline'><div>{title}</div></Link>
          <div className='close-icon' onClick={()=> removeFromCart(id)}><IoMdClose/></div>
         </div>
         <div className='title-close'>
          <div className='priceamont'>
            <div onClick={()=> decreaseAmount(id, cartDetails)}>
              <IoMdRemove/>
            </div>
            <div>{amount}</div>
            <div onClick={()=> increaseAmount(id)}>
              <IoMdAdd/>
            </div>
          </div>
          <div className='align-self-center'>${price}</div>
          <div  className='align-self-center'>${Number.parseFloat(price * amount).toFixed(2)}</div>
         </div>
      </div>
    </div>
  )
}

export default CartItem
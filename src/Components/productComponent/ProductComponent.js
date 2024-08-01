import React, { useContext } from 'react'
import { BsEye, BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContextProvider/CartContextProvider';

function ProductComponent({product}) {
  // console.log(product);

  const {id, image, category, title, price} = product;
  const {addToCart} = useContext(CartContext);
   
  return (
    <div > 
    <div  className='box-container' style={{border: '1px solid #0003', position: 'relative'}}>
       <div className='product-img-container'>
         <img src={image} className='product-img'/>
         <div className='box'> 
          <div className='iconsStyle' onClick={()=> addToCart(id,product)}>
            <BsPlus color='#fff' fontWeight={'900'} fontSize={'21px'}/>
          </div>
          <Link to={id ? `product/${id}` : '/'}>
          <div className='iconsStyle'>
            <BsEye  color='#fff' fontWeight={'900'} fontSize={'21px'} />
          </div>
          </Link>
         </div>
       </div>
     
    </div>
      <div className='products-content'>
      <div>{category}</div>
      <Link to={`product/${id}`} style={{textDecoration: 'none'}}>
       <h2 className='product-title'>{title}</h2>
      </Link>
      <div className='product-price'>$ {price}</div>      
    </div>
    </div>
  )
}

export default ProductComponent;
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../CartContextProvider/CartContextProvider'
import { ProductContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveIndicator from '../../Components/ActiveIndicator/ActiveIndicator';


function ProductScreen() {

  
  const {id} = useParams();
  const {addToCart} = useContext(CartContext);
  const {products} = useContext(ProductContext);

  
    const product = products.find((value) => value.id === parseInt(id));
    console.log(product);


 

 
   

  return (
    <div>
    {
      product ? (
        <div className='product-section'>

        <div className='product-img'>
           <img src={product.image} alt={id}/>
        </div>
        <div className='product-content'>
          <h2>{product.title}</h2>
          <p className='price'>Price: $ {product.price}</p>
          <p>{product.description}</p>
          <div className='flex'>
          <button onClick={()=> addToCart(product.id , product)}>Add to Cart</button>
           <Link className='btn-1' to={'/'}>
           Explore More
           </Link>

          </div>
        </div>
        </div>

      ) : (
        <div style={{height: '10vh'}}>
          <ActiveIndicator/>
          </div>
      )
      
    } 
    </div>
  )
}

export default ProductScreen
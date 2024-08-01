import React, { useContext } from 'react'
import { ProductContext } from '../../AuthProvider/AuthProvider';
import ProductScreen from '../ProductScreen/ProductScreen';
import './style.css';
import ProductComponent from '../../Components/productComponent/ProductComponent';
import Hero from '../../Components/Hero/Hero';
import ActiveIndicator from '../../Components/ActiveIndicator/ActiveIndicator'

function HomeScreen() {

    // get products from Product context
  const {products} =  useContext(ProductContext);
  
  const filteredProducts = products.filter((item) => item.category  === "men's clothing" || item.category  === "women's clothing");


  return (
    <div>
        <Hero/>
    <div className='product-display-container'>
    
    <div className='product-display'>
      {
        filteredProducts.length ? filteredProducts.map((product, i) => {
          return (
          <ProductComponent key={product.id} product={product}/>
          
          )
        }) : (
          <div style={{width: '100%'}}>
        <ActiveIndicator/> </div>)
      }
    </div>
    </div>
   
    </div>
  )
}

export default HomeScreen;
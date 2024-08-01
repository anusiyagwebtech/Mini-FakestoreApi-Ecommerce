import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

function ProductProvider({children}) {

    const [products, setProducts] = useState([]);
    useEffect(()=> {
        const fetchProducts = async ()=> {
          try {
              const data = await axios.get('https://fakestoreapi.com/products');
              // console.log('Fetching Product Data');
              
              setProducts(data.data);
              // console.log(products);
          } catch (error) {
              console.log(`Product Fetching Error: ${error}`);
          }
        
        }
        fetchProducts();
    }, [products])
   

  return (
   <ProductContext.Provider value={{products}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductProvider;
import React, { useEffect , useState} from 'react';
import RouterPage from './Navigation/RouterPage';
import ProductProvider from './AuthProvider/AuthProvider';
import './App.css';
import SidebarContextProvider from './SidebarContextProvider/SidebarContextProvider';
import CartContextProvider from './CartContextProvider/CartContextProvider';
import ActiveIndicator from './Components/ActiveIndicator/ActiveIndicator';

function App() {

const [isLoading, setIsLoading] = useState(true);

useEffect(
()=>{
setTimeout(() => {
  setIsLoading(false);
}, 2500);

},[]
)
  
  return (
   <div>
{
    

    isLoading ? <div style={{width: '100%', height: '100vh'}}> <ActiveIndicator/> </div>:  <SidebarContextProvider>
    <CartContextProvider>
  <ProductProvider>
   
   <RouterPage/>
   
  
  </ProductProvider>
  </CartContextProvider>
  </SidebarContextProvider>

}
   
    </div>
  )
}

export default App
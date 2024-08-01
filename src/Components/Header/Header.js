import React, { useContext, useEffect, useState } from 'react'
import { SideBarContext } from '../../SidebarContextProvider/SidebarContextProvider'
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../../CartContextProvider/CartContextProvider';
import logo from '../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';

function Header() {

 const [isActive, setIsActive] = useState(false );
 const {isOpen, setIsOpen} =  useContext(SideBarContext);
 const {cartAmount} = useContext(CartContext);

 


 useEffect(()=>{
  window.addEventListener('scroll', ()=> 
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
   );
 })

 
  return (
    <div className = {`header ${isActive ? 'bg1': 'bg2'}`}  >
      <div> 
         <Link to='/'>
           <img src={logo} className='logo'/>
         </Link>
      </div>
      <div onClick={()=> setIsOpen(!isOpen)} style={{cursor: 'pointer'}} className='amountStickyParent'>
        <BsBag/>
        <span className='amountSticky'>{cartAmount}</span>
      </div>
    </div>
  )
}

export default Header
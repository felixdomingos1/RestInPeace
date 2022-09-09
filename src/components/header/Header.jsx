import React from 'react';


import Nav from './Navegation';
import Logo from './Logo';
import Info from './Info';
import profile from '../gallery/gallery-1.jpg'

import "./header.css"

 const Header = () => {
   return( 
      <div className='container'>
         <div className="container1"></div>
               <img src={profile} alt="" />
         <div className="Header">
            <Logo/>
            <Nav/>
         </div>
         <Info/>
      </div>
      
   );
 }
  
 export default Header;
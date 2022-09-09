import React from 'react';

import "./Menus.css"


import profile from "../gallery/gallery-5.jpg"
import Classification from '../Menu/Classification'

const Menus = () => {
    return ( 
        <>
            <div className="MenuItems">
                  <div className="contentPrices">
                       <div className="item">
                              <img src={profile} alt="" />
                       </div>
                       <span>Patanusca loredede</span>
                  </div>
                  <div className="classifications">
                        <Classification/>
                  </div> 
            </div>
        </>
     );
}
 
export default Menus;
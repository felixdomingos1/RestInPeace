import React from 'react';

import "./HeaderMostWantedList.css"
import Menus from './Menus';

const HeaderMostWantedList = () => {
    return ( 
        <>
           <div className="containerMenus">
                <Menus/>
                <Menus/>
                <Menus/>
           </div>
        </>
     );
}
 
export default HeaderMostWantedList;
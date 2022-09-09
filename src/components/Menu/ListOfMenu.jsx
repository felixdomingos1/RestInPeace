import React from 'react';

import "./ListOfMenu.css"
import Menus from './Menus';

const ListOfMenu = () => {
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
 
export default ListOfMenu;
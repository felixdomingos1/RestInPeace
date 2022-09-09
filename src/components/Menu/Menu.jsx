import React from 'react';
import HeaderMenu from './HeaderMenu';
import ListOfMenu from './ListOfMenu';
import Button1 from '../header/Button1';

import "./Menu.css"

const Menu = () => {
    return ( 
        <>
            <div className="containerMenu">
                <HeaderMenu/>
                <ListOfMenu/>
                <div className="lastButton">
                    <Button1/>
                </div> 
            </div>
        </>
     );
}
 
export default Menu;
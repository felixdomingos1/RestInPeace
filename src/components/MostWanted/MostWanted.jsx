import React from 'react';
import HeaderMostWanted from './HeaderMostWanted';
import ListOfMenu from './HeaderMostWantedList';

import "./MostWanted.css"

const MostWanted = () => {
    return ( 
        <>
            <div className="containerMenu">
                <HeaderMostWanted/>
                <ListOfMenu/>
            </div>
        </>
     );
}
 
export default MostWanted;
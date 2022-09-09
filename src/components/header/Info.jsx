import React from 'react';
import Button1 from './Button1';
import Button2 from './Button2';

import './Info.css'

const Info = () => {
    return (  
        <>
            <div className="info">
                <div className="content">
                    <h1>Catálogo Rest In Peace</h1>
                    <div className="buttons">
                        <Button1/>
                        <Button2/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Info;
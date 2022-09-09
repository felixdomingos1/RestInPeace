import React from 'react';

import "./Menus.css"

import Classification from '../Menu/Classification'
import Button2 from '../header/Button2'

const Menus = () => {
    return ( 
        <>
            <div className="MenuItems">
                  <div className="title">
                        Arroz Doce
                  </div>
                  <div className="contentPrice1">
                        <div className="items">
                              <span>Arroz Doce</span>
                              <p>Crore Epson Dolor</p>
                        </div>
                        <div className="items">
                              <span>Arroz Doce lorem</span>
                              <p>Modem Dolor Set </p>
                        </div>
                        <div className="items">
                              <span>Arroz Doce</span>
                              <p>Lorem Dolor Set </p>
                        </div>
                        <div className="items">
                              <span>Arroz Doce pedro</span>
                              <p>Lorem Epson Do </p>
                        </div>
                        <div className="items">
                              <span>Arroz Doce</span>
                              <p>Lorem Epson Dolor</p>
                        </div>
                  </div>
                  <div className="btn">
                        <Button2/>  
                  </div>
                  <div className="classifications1">
                        <Classification/>
                  </div> 
            </div>
        </>
     );
}
 
export default Menus;
import React from 'react';

import "./AboutMain.css"
import image from "../gallery/gallery-2.jpg"
import Button2 from '../header/Button2';

const AboutMain = () => {
    return ( 
        <>
            <div className="AboutMain">
                <div className="firstContainer">
                    <img src={image} alt="" /> 
                    <div className="contentAbout">
                        <h1>Quem Somos</h1>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, autem. Quaerat omnis ea, veniam laborum quia perspiciatis minus adipisci porro id, corrupti obcaecati eius est ipsum, iure pariatur vitae fugit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur, accusantium, eligendi consequatur
                            </p>
                            <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, autem. Quaerat omnis ea, veniam laborum quia perspiciatis minus adipisci porro id, corrupti obcaecati eius est ipsum, iure pariatur vitae fugit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur, accusantium, eligendi consequatur 
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur, accusantium, eligendi consequatur

                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="secondContainer">
                    <div className="contentAbout2">
                        <h1>Quem Somos</h1>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, autem. Quaerat omnis ea, veniam laborum quia perspiciatis minus adipisci porro id, corrupti obcaecati eius est ipsum, iure pariatur vitae fugit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur, accusantium, eligendi consequatur
                            </p>
                            <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, autem. Quaerat omnis ea, veniam laborum quia perspiciatis minus adipisci porro id, corrupti obcaecati eius est ipsum, iure pariatur vitae fugit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur, accusantium, eligendi consequatur 
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur, accusantium, eligendi consequatur

                            </p>
                        </div>
                    </div>
                    <img src={image} alt="" /> 
                </div>
                <div className="lastButton color">
                    <Button2/>
                </div> 
            </div>
        </>
     );
}
 
export default AboutMain;
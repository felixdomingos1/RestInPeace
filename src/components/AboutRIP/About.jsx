import React from 'react';

import "./About.css"
import AboutHeader from './AboutHeader';
import AboutMain from './AboutMain';

const About = () => {
    return ( 
        <>
            <div className="AboutContainer">
                <AboutHeader/>
                <AboutMain/>
            </div>
        </>
     );
}
 
export default About;
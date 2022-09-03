import React from 'react';
import AboutImage from './AboutImage';
import AboutText from './AboutText';
import '../../style/css/about.css'

function About(props) {
    return (
        <section id='about'>
            <div className='container'>
                <AboutImage/>
                <AboutText/>
            </div>
        </section>
    );
}

export default About;
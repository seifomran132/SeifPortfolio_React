import React from 'react';
import Nav from '../components/Nav';
import About from '../components/about/About';
import Timeline from '../components/about/Timeline';

import '../style/css/aboutscreen.css'

function AboutScreen(props) {
    return (
        <div className='about-screen'>
            <div className='container'>
                <Nav/>
                <h2 className='about-heading'>About me</h2>
                <About/>
                <h2 className='about-heading'>Timeline</h2>
                <Timeline/>
            </div>
        </div>
    );
}

export default AboutScreen;
import React from 'react';
import Nav from '../components/Nav';
import HomeInfo from '../components/HomeInfo/HomeInfo';

function Home(props) {
    return (
        <div className='container'>
            <Nav></Nav>
            <HomeInfo/>
        </div>
    );
}

export default Home;
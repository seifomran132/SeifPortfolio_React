import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import AboutScreen from './screens/AboutScreen';


import './style/bootstrap/css/bootstrap-grid.min.css'
import './style/bootstrap/css/bootstrap.min.css'
import './style/css/app.css'


function App(props) {
    return (
        <div className='main-wrapper'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<AboutScreen/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
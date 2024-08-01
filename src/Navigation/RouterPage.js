import React from 'react';
import * as Screens from '../Screens';
import * as Components from '../Components';
import SideBar from '../Components/SideBar/SideBar';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function RouterPage() {
  return (
    <div>
        <Router>
            <Components.Header/>
            <Routes>
                <Route path='/' element={<Screens.HomeScreen/>}/>
                <Route path='/product/:id' element={<Screens.ProductScreen/>}/>
            </Routes>
            <Components.SideBar/>
            <Components.Footer/>
        </Router>
    </div>
  )
}

export default RouterPage
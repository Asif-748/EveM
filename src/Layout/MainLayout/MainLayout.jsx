import React from 'react';
import Navabar from '../../Components/Navbar/Navabar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navabar></Navabar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
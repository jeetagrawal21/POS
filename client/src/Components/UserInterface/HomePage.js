import React, { useState } from 'react';
import SideBar from '../Sidebar/SideBar.js';
import Cart from '../Cart/Cart.js';
import Products from '../Products/Products.js';
import './Homepage.css';

function HomePage(){

    // const [sidebarOpen, setSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    // setSidebarOpen(!sidebarOpen);
    // };

    return (
    <div className="home">
        {/* <button className="toggle-button" onClick={toggleSidebar}> */}
        
        {/* </button> */}
        {/* <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />x */}
        <div className="main-content">
        <SideBar />
        <Products />
        <Cart />
        </div>
    </div>
    );
}
export default HomePage;

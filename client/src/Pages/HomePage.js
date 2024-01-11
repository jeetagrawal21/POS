import React from 'react';
import SideBar from '../Components/Sidebar/SideBar.js';
import Cart from '../Components/Cart/Cart.js';
import Products from '../Components/Products/Products.js';
import './Homepage.css';

function HomePage(){
    return (
        
    <div>
        <SideBar />
        <Products />
        <Cart />
    </div>
    );
}
export default HomePage;

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarItems } from './SideBarItems.js';
import { IconContext } from 'react-icons';
import './Sidebar.css';

function SideBar() {

  const [sidebar, setSidebar] = useState(false);
  // For the sidebar to open and close
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>  
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1>Point of Sale</h1>
        </div>

        {/* This is the sidebar */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>

            {/* This is the close icon */}
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {/* This is the sidebar menu */}
            {SidebarItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>

                  {/* This is the sidebar icon */}
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>

                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    
    </>
  );
}

export default SideBar;
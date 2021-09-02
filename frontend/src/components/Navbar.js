import React, { useState } from 'react'
import logo from '../resources/bindingofisaacfoursouls.jpg'
import DrawerToggleButton from './DrawerToggleButton'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'

const Navbar = ({ setBody }) => {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
  }

  return (
    <div>
      <header className='Navbar'>
        <nav className='Navbar-navigation'>
          <div className='Navbar-navigation'>
            <DrawerToggleButton toggleDrawer={toggleDrawer} />
          </div>
          <img className='Navbar-logo' src={logo} onClick={() => setBody('main')} />
          <div className='Navbar-spacer'></div>
          <div className='Navbar-items'>
            <ul>
              <li className='Navbar-item' onClick={() => setBody('main')}>Main Screen</li>
              <li className='Navbar-item' onClick={() => setBody('baseGame')}>Base Game</li>
              <li className='Navbar-item' onClick={() => setBody('baseExpansion')}>Base & Expansion</li>
              <li className='Navbar-item' onClick={() => setBody('goldBoxEdition')}>Gold Box Edition</li>
              <li className='Navbar-item' onClick={() => setBody('goldExpansion')}>Gold & Expansion</li>
            </ul>
          </div>
        </nav>
      </header>
      <SideDrawer show={drawerOpen} toggleDrawer={toggleDrawer} setBody={setBody} />
      {drawerOpen && <Backdrop toggleDrawer={toggleDrawer} />}
    </div>
  )
}

export default Navbar

import React from 'react'

const SideDrawer = ({ show, toggleDrawer, setBody }) => {

  let drawerClasses = ['Side-Drawer']
  if (show) {
    drawerClasses.push('open')
  }

  const handleSelection = (body) => {
    setBody(body)
    toggleDrawer()
  }

  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li className='Side-Drawer-item' onClick={() => handleSelection('main')}>Main Screen</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('baseGame')}>Base Game</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('baseExpansion')}>Base & Expansion</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('goldBoxEdition')}>Gold Box Edition</li>
        <li className='Side-Drawer-item' onClick={() => handleSelection('goldExpansion')}>Gold & Expansion</li>
      </ul>
    </nav>
  )
}

export default SideDrawer
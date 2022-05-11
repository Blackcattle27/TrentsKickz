import React from 'react'

const Header = ({showAbout, showSearch, showModal}) => {

  return (
      <header className="header">
          <h1 className='headerIcon'>Trent's.Kickz LLC</h1>
          <nav className="navigation">
            <ul>
                <li><button onClick={showAbout} className="searchBtn">About</button></li>
                <li><button onClick={showSearch} className="searchBtn">Search</button></li>
                <li><button onClick={showModal} className="searchBtn">Cart</button><div className='cartQty'></div></li>
            </ul>
          </nav>
        </header>
  )
}

export default Header
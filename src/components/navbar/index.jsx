import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../logo'
import './styles.css'

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="navbar__top">
          <div className="navbar__logo">
            <Link to="/">
              <Logo width={144} />
            </Link>
          </div>
          <div className="navbar__links">
            <Link to="/nike">
              <button className="navbar-links__item">Nike</button>
            </Link>
            <Link to="/adidas">
              <button className="navbar-links__item">Adidas</button>
            </Link>
            <Link to="/puma">
              <button className="navbar-links__item">Puma</button>
            </Link>
          </div>
          <div className="navbar__buttons">
            <Link to="/cart">
              <button className="navbar-buttons__item">
                <span className="material-symbols-rounded">shopping_cart</span>
              </button>
            </Link>
            <button className="navbar-buttons__item">
              <span className="material-symbols-rounded">account_circle</span>
            </button>
            <button className="navbar-buttons__item">
              <span className="material-symbols-rounded">logout</span>
            </button>
          </div>
        </div>
        <div className="navbar__links mobile">
          <Link to="/nike">
            <button className="navbar-links__item">Nike</button>
          </Link>
          <Link to="/adidas">
            <button className="navbar-links__item">Adidas</button>
          </Link>
          <Link to="/puma">
            <button className="navbar-links__item">Puma</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

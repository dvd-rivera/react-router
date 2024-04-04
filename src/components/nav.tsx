import React from 'react'
import { Link } from 'react-router-dom';
const Nav: React.ComponentType = () => {
  return (
    <div className='nav-container'>
        <div className="brand-container">
            Logo
        </div>
        <div className="menu-container">
            <ul>
                <li><Link to="">Inicio</Link></li>
                <li><Link to="/form">Contacto</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
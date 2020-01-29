// Modules
import React from 'react'
import { Link } from 'react-router-dom'


// CSS
import './Header.css'

const Header = () => {
  return(
    <div className='headerContainer'>
      <img className='logo'/>
        <ul className='header'>
          <li><Link to='/' className='accueil'>Accueil</Link></li>
          <li><Link to='/Boutique' className='boutique'>Boutique</Link></li>
          <li><Link to='/Admin' className='admin'>Admin</Link></li>
        </ul>
    </div>
  )
}

export default Header
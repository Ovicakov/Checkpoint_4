// Modules
import React from 'react'
import { NavLink } from 'react-router-dom'

import './HeaderAdmin.css'

const HeaderAdmin = () => {
  return (
    <div className='headerAdminContainer'>
      <nav className='headerAdmin'>
        <NavLink to='/AccueilAdmin' className='accueilAdmin'>Accueil admin</NavLink>
        <NavLink to='/BoutiqueAdmin' className='boutiqueAdmin'>Boutique</NavLink>
      </nav>
    </div>
  )
}

export default HeaderAdmin
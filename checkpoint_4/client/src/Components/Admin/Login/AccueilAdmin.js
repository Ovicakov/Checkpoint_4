import React from 'react'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin' 

export default function AccueilAdmin() {

  const resetLocalStorage = () => {
    localStorage.clear()
    document.location.reload(true);
  }

  return (
    <>
      <HeaderAdmin />
      <div className="admin-container">
        <p>Accueil admin</p>
        <button className="deconnexionAdmin" onClick={resetLocalStorage}>Se déconnecter</button>
      </div>
    </>
  )
}
import React from 'react'
import './CardsForm.css'

export default function CardsForm({ name, photo, description }) {
  return (
    <div className="containerOfCard">
      <div className="cardContainer CardsFormContainer">
        <div className="card my-4 mx-4 text-center">
          <img className="card-img-top" src={photo} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.substring(0, 82)}…</p>
            <a className="btn btn-primary align-self-end btn btn-block">Ajouter au panier</a>
          </div>
        </div>
      </div>
    </div>
  )
}

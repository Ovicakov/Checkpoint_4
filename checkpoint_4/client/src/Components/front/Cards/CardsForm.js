import React from 'react'

export default function CardsForm({ name, photo, description }) {
  return (
    <div className="cardContainer">
      <div className="card my-4 mx-4 text-center">
        <img className="card-img-top" src={photo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Add to bucket</a>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Cards.css'

import CardsForm from './CardsForm'

export default function Cards() {

  const [article, setArticle] = useState([])
  const [categorie, setCategorie] = useState([])
  const [artByCat, setArtByCat] = useState([])

  const articleByCat = (e) => {    
    axios.get(`http://localhost:4000/articles/getCatId/${e.target.value}`)
    .then(res => setArtByCat(res.data))
  }

  useEffect(() => {
    axios.get('http://localhost:4000/articles')
      .then(res => setArticle(res.data))

    axios.get('http://localhost:4000/categorie')
      .then(res => setCategorie(res.data))
  }, [])

  return (
    <>
      <div className="cardsContainer">
        <p>Choisissez votre catégorie :</p>
        <select className="selectCards" onChange={(e) => articleByCat(e)}>
          {categorie && categorie.map((categorie) =>
            <option value={categorie.cat_id}>{categorie.cat_name}</option>
          )}
        </select>
      </div>

      <div className="row mx-auto">
        {article && artByCat.map(article => (
          <CardsForm
            key={article.art_id}
            value={article.art_id}
            name={article.art_name}
            photo={article.art_photo}
            description={article.art_description}
          />
        ))}
      </div>
    </>
  )
}



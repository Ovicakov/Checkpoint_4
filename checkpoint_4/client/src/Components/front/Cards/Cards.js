import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Cards.css'

import CardsForm from './CardsForm'

export default function Cards() {

  const [article, setArticle] = useState([])
  const [categorie, setCategorie] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/articles')
      .then(res => setArticle(res.data))

    axios.get('http://localhost:4000/categorie')
      .then(res => setCategorie(res.data))

  }, [])

  return (
    <>
      <select>
        {categorie.map((categorie) =>
          <option>{categorie.cat_name}</option>)}
      </select>

      <div>
        {article.map(article => (
          <CardsForm
            name={article.art_name}
            photo={article.art_photo}
            description={article.art_description}
          />
        ))}
      </div>
    </>
  )
}



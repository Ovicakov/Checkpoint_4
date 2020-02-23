import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'
import axios from 'axios'

export default function BoutiqueAdmin() {

  const [categorie, setCategorie] = useState([])

  const [state, setState] = useState({
    art_name: '',
    art_photo: '',
    art_description: '',
    art_cat_id: null
  })

  const handleSubmit = (e) => {

    const artObject = {
      art_name: state.art_name,
      art_photo: state.art_photo,
      art_description: state.art_description,
      art_cad_id: state.art_cat_id
    }

    axios.post("http://localhost:4000/articles", artObject)
      .then(res => {
        console.log('____RES____', res.data);
      })
      .catch(err => {
        if (err) {
          alert(`Problème d'ajout du nouvel article`)
        }
      })
  }

  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    })
    console.log(state.art_cat_id);
    
  }

  useEffect(() => {
    axios.get('http://localhost:4000/categorie')
      .then(res => setCategorie(res.data))
  }, [])

  return (
    <>
      <HeaderAdmin />
      <div className="admin-container">

        <div className="titrePageBoutiqueAdmin">
          <h1>Ajouter un article</h1>
        </div>

        <div>

          <form>

            <div class="form-group">
              <label for="exampleFormControlInput1">Titre de l'article</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="art_name"
                value={state.art_name}
                onChange={handleChange} />
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect2">Catégorie de l'article</label>
              <select
                class="form-control"
                id="exampleFormControlSelect2"
                name="art_cat_id"
                value={state.art_cat_id}
                onChange={handleChange}>

                <option>Choisissez votre catégorie</option>
                {categorie.map(item => {
                  return (
                    <option value={item.cat_id}>{item.cat_name}</option>
                  )
                })}
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Lien de la photo</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="1"
                name="art_photo"
                value={state.art_photo}
                onChange={handleChange}></textarea>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea2">Description de l'article</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="art_description"
                value={state.art_description}
                onChange={handleChange}></textarea>
            </div>

            <button onSubmit={(e) => handleSubmit(e)}>Ajouter l'article</button>
          </form>

        </div>

      </div>
    </>
  )
}
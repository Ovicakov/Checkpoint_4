import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import Header from './Header'

// CSS
import './Admin.css'

const Admin = (props) => {

  let history = useHistory()

  const [state, setState] = useState({
    user_email: '',
    user_password: ''
  })

  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    axios.post("http://localhost:4000/authentification", {
      user_email: state.user_email,
      user_password: state.user_password
    })
      .then(res => {
        localStorage.setItem('jwt-token', res.headers.token) // requireAuth et notAuth
        alert(`Vous êtes connecté sous le compte admin : ${state.user_email} !`)
        document.location.reload(true);
      })
      .catch(err => {
        if (err = 401) {
          alert(`Aucun compte ne correspond`)
        }
      });
  }

  return (
    <div className="containerForm">
      <Header />
      <Form className="formAdmin">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="user_email"
            id="exampleEmail"
            placeholder="with a placeholder"
            onChange={handleChange}
            value={state.user_email} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="user_password"
            id="examplePassword"
            placeholder="password placeholder"
            onChange={handleChange}
            value={state.user_password} />
        </FormGroup>
        <Button type="button" onClick={e => handleSubmit(e)}>Envoyer</Button>
      </Form>
    </div>
  )
}

export default Admin

import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

// CSS
import './Admin.css'

const Admin = () => {

  const [state, setState] = useState({
    user_email: '',
    user_password: ''
  })

  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    })
  }

  const submitForm = (e) => {
    e.preventDefault()

    axios.post('http://localhost:4000/authentification', {
      user_email: state.user_email,
      user_password: state.user_password
    }).then(res => localStorage.setItem('cool-jwt', res.data));
  }

  return (

    <div className="containerForm">
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
        <Button type="button" onClick={e => submitForm(e)}>Envoyer</Button>
      </Form>
    </div>
  )
}

export default Admin

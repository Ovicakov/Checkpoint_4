import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { getJwt } from '../../helpers/jwt'
import axios from 'axios'

export default function AuthenticatedComponent(props) {

  let history = useHistory();

  const [user, setUser] = useState(null)

  useEffect(() => {
    const jwt = getJwt()
    if (!jwt) {
      history.push('/Protected')
    }

    axios.get('/authentification', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => setUser({
      user: res.data
    })).catch(err => {
      localStorage.removeItem('jwt-token')
      // history.push('/Admin')
    });
  }, [])

  const theReturn = () => {
    if (user === undefined) {
      return <div><h1>Loading...</h1></div>
    } 
    else {
      return <div>{props.children}</div>
    }
  }

  return (
    <div>
      {theReturn}
    </div>
  )
}

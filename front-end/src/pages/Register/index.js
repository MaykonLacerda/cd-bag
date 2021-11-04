
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import "../Login/styles.css"

async function registerUser({ name, username, password }) {
  try {
    const response = await api.post('/users', {
      name,
      username,
      password
    });
    
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

const Register = () => {
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const onSubmit = async e => {
    try {
      e.preventDefault();

      const { data } = await registerUser({
        name,
        username,
        password
      });

      setToken(data.token);

      return history.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>REGISTER</h2>
          </div>

          <form className="form" method="post" onSubmit={onSubmit}>
            <label htmlFor="user-name">Nome</label>
            <input id="user-name" className="form-content" type="text" name="name" autoComplete="on" onChange={e => setName(e.target.value)} required />
            
            <div className="form-border"></div>
            
            <label htmlFor="user-username">Usuário</label>
            <input id="user-username" className="form-content" type="text" name="username" autoComplete="on" onChange={e => setUserName(e.target.value)} required />

            <div className="form-border"></div>

            <label htmlFor="user-password">Senha</label>
            <input id="user-password" className="form-content" type="password" name="password" onChange={e => setPassword(e.target.value)} required />

            <div className="form-border"></div>

            <button id="submit-btn" type="submit" name="submit">Registrar</button>

            <Link to="/" id="register-btn">Ja tenho conta</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

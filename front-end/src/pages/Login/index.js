
import React from 'react'
import "./styles.css"

const Login = () => {
  return (
    <div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-username">
              Usuário
            </label>
            <input id="user-username" className="form-content" type="username" name="username" autoComplete="on" required />
            <div className="form-border"></div>
            <label htmlFor="user-password">Senha
            </label>
            <input id="user-password" className="form-content" type="password" name="password" required />
            <div className="form-border"></div>
            <input id="submit-btn" type="submit" name="submit" value="Entrar" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

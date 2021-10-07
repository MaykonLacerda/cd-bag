import React, { useEffect, useState } from 'react'

import './styles.css'

function EditCdForm(props) {
  const [cd, setCd] = useState(props.currentCd)

  useEffect(() => {
    setCd(props.currentCd)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setCd({ ...cd, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    props.updateCd(cd.id, cd)
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label>Nome</label>
        <input type="text" name="name" value={cd.name} onChange={handleInputChange} />
        <label>Artista</label>
        <input type="text" name="artist" value={cd.artist} onChange={handleInputChange} />
        <label>Ano de lançamento</label>
        <input type="text" name="release_year" value={cd.release_year} onChange={handleInputChange} />
        <label>Gênero</label>
        <input type="text" name="genre" value={cd.genre} onChange={handleInputChange} />
        <label>Duração</label>
        <input type="text" name="duration" value={cd.duration} onChange={handleInputChange} />
        <div className="button-form">
          <button className="btn" type="submit">Editar</button>
          <button className="btn" onClick={() => props.setEditing(false)}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default EditCdForm

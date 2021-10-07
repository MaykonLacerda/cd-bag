import React, { useState } from 'react'

import './styles.css'

function AddCdForm(props) {
  const initialFormState = { name: '', artist: '', release_year: '', genre: '', duration: '' }
  const [cd, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...cd, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!cd) return

    const cd1 = { ...cd, user_id: "ce4848a4-d765-4a72-bf34-eda0b3f21e41" }

    props.addCd(cd1);
    setUser(initialFormState)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Salvar</button>
        <button>Cancelar</button>
      </form>
    </div>
  )
}

export default AddCdForm

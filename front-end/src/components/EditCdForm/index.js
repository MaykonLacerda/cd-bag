import React, { useEffect, useState } from 'react'

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
        <button type="submit">Editar</button>
        <button onClick={() => props.setEditing(false)}>Cancelar</button>
      </form>
    </div>
  )
}

export default EditCdForm

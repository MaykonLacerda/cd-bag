import React from 'react'

import './styles.css'

function CdTable(props) {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Artista</th>
            <th>Ano de lançamento</th>
            <th>Gênero</th>
            <th>Duração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.cds.length > 0 ? (
            props.cds.map((cd) => (
              <tr key={cd.id}>
                <td>{cd.name}</td>
                <td>{cd.artist}</td>
                <td>{cd.release_year}</td>
                <td>{cd.genre}</td>
                <td>{cd.duration}</td>
                <td>
                  <button className="button" onClick={() => props.editCd(cd.id, cd)}>Editar</button>
                  <button className="button" onClick={() => props.deleteCd(cd.id)}>Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum CD salvo</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CdTable

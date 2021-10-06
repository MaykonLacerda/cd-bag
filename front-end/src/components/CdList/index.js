import React from 'react'

const CdList = (props) => {
  const list = props.itens;

  return (
    <div className="cd-list">
      <ul>
        {list.map((cd) => <li key={cd.id}>{cd.artist} </li>)}
      </ul>
    </div>
  )
}

export default CdList

import React, { useMemo, useState, useEffect } from 'react'

import Table from "../Table";

import api from '../../services/api'

import './styles.css';

const CdList = () => {
  const [data, setData] = useState([]);

  const user_id = "ce4848a4-d765-4a72-bf34-eda0b3f21e41";

  useEffect(() => {
    (async () => {
      const result = await api.post(`/cds/list/${user_id}`);

      setData(result.data);
    })();
  }, []);

  console.log(data)

  const columns = useMemo(
    () => [
      {
        Header: "Lista de CD's",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Artista",
            accessor: "artist"
          },
          {
            Header: "Ano de lançamento",
            accessor: "release_year"
          },
          {
            Header: "Gênero",
            accessor: "genre"
          },
          {
            Header: "Duração",
            accessor: "duration"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default CdList

import React, { useEffect, useState } from 'react';
import AddCdForm from '../../components/AddCdForm';
import CdTable from '../../components/CdTable';
import EditCdForm from '../../components/EditCdForm';

import apiService from '../../services/apiService';

import "./styles.css";

const user_id = "ce4848a4-d765-4a72-bf34-eda0b3f21e41"; //remover depois

const Dashboard = () => {
  const [cds, setCds] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { name: '', artist: '', release_year: '', genre: '', duration: '' }
  const [currentCd, setCurrentCd] = useState(initialFormState)

  useEffect(() => {
    (async () => {
      const response = await apiService.get(user_id);

      setCds(response.data);
    })();
  }, []);

  const addCd = (cd) => {
    apiService.create(cd)
  }

  const editCd = (id, cd) => {
    setEditing(true)

    setCurrentCd({ id: cd.id, name: cd.name, artist: cd.artist, release_year: cd.release_year, genre: cd.genre, duration: cd.duration })
  }

  const updateCd = (id, updatedCd) => {
    setEditing(false)

    setCds(cds.map((cd) => (cd.id === id ? updatedCd : cd)))

    apiService.update(id, updatedCd);
  }

  const deleteCd = (id) => {
    apiService.remove(id);
  }

  return (
    <div className="dashboard">
      <h1>Bolsa de CD's</h1>

      <div>
        {editing ? (
          <div>
            <EditCdForm
              setEditing={setEditing}
              currentCd={currentCd}
              updateCd={updateCd}
            />
          </div>
        ) : (
          <div>
            <AddCdForm addCd={addCd} />
          </div>
        )}
      </div>

      <CdTable cds={cds} deleteCd={deleteCd} editCd={editCd} />
    </div>
  )
}

export default Dashboard

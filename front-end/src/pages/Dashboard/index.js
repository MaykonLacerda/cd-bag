import React, { useEffect, useState } from 'react'
import CdList from '../../components/CdList';
import api from '../../services/api'

import "./styles.css"

const user_id = "ce4848a4-d765-4a72-bf34-eda0b3f21e41";

const Dashboard = () => {
  const [cd, setCd] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.post(`/cds/list/${user_id}`);
      setCd(data);
      console.log(cd);
    })();
  }, []);

  return (
    <div>
      <CdList itens={cd} />
    </div>
  )
}

export default Dashboard

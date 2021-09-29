import AgregarEdificio from './components/AgregarEdificio';
import Boton from './components/Boton';
import Edificio from './components/Edificio';
import Edificios from './components/Edificios';
import Header from './components/Header';

import {useState, useEffect} from 'react';
import React from 'react';

function App() {
  const [showAddEdificio, setShowAddEdificio] = useState (false);

  const [edificios, setEdificios] = useState([])

  useEffect(() => {
    const getEdificios = async () => {
      const edificiosDelServidor = await fetchEdificios();
      setEdificios(edificiosDelServidor);
    }

    getEdificios();
  }, [])

  //FETCH EDIFICIOS
  const fetchEdificios= async () => {
    const res = await fetch('http://localhost:5000/edificios');
    const data = await res.json();

    return data;
  }

   //FETCH EDIFICIO
   const fetchEdificio = async (id) => {
    const res = await fetch(`http://localhost:5000/edificios/${id}`)
    const data = await res.json();

    return data;
  }

  //AGREGAR TECNICO
  const agregarEdificio = async (edificio) => {
    const res = await fetch('http://localhost:5000/edificios', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(edificio)
    })

    const data = await res.json()
    setEdificios([...edificios, data])

  }

  //ELIMINAR EDIFICIO
  const eliminarEdificio = async (id) => {
    await fetch(`http://localhost:5000/edificios/${id}`, {
      method: 'DELETE',
    })

    setEdificios(edificios.filter((edificio) => edificio.id !== id  ))
  }

  //TOGGLE RECORDATORIO
  const toggleRecordatorio = async(id) => {
    const edificioParaToggle = await fetchEdificio(id);
    const updEdificio = {...edificioParaToggle, 
    reminder: !edificioParaToggle.reminder}

    const res = await fetch(`http://localhost:5000/edificios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updEdificio)
    })

    const data = await res.json()


    setEdificios(edificios.map((edificio) => edificio.id === id ? { ...edificio, reminder: data.reminder } : edificio)) //cambia el estado del reminder
  }
 

  return (
     <div className="container">
        <Header onAdd={() => setShowAddEdificio(!showAddEdificio)} showAdd= {showAddEdificio} />
          {showAddEdificio && <AgregarEdificio onAdd={agregarEdificio} />}
        {edificios.length > 0 ? <Edificios edificios={edificios} onDelete =  {eliminarEdificio} onToggle={toggleRecordatorio} /> : 'No edificios to show'}

     </div>
     //si hay tecnicos > 0, las muestra, sino muestra cartel
  );
}


export default App;

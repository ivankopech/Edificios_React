import React from 'react'
import {useState} from 'react';

 const AgregarEdificio = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('please add text');
            return;
        }
        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className= 'add-form' onSubmit = { onSubmit}>
            <div className= 'form-control'>
                <label>Edificios</label>
                <input type= 'text' placeholder='agregar edficio' value={text} onChange= {(e) => setText(e.target.value)} />
            </div>
            <div className= 'form-control '>
                <label>Day</label>
                <input type= 'text' placeholder='agregar dia' value={day} onChange= {(e) => setDay(e.target.value)} />
            </div>
            <div className= 'form-control form-control-check'>
                <label>Recordatorio</label>
                <input type= 'checkbox' checked={reminder} value={reminder} onChange= {(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type= 'submit' value= 'Guardar Edificio' className= 'btn btn-block' />
        </form>
    )
}


export default AgregarEdificio;
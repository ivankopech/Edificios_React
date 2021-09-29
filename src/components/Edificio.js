import Edificios from "./Edificios"
import {FaTimes} from 'react-icons/fa';

 const Edificio = ({edificio, onDelete, onToggle}) => {
    return (
        <div className={`edificio ${edificio.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(edificio.id)}>
            <h3>{edificio.text} <FaTimes style= {{color: 'red', cursor: 'pointer'}} onClick= {() => onDelete(edificio.id)} /></h3>
            <h3>{edificio.day}</h3>
        </div>
    )
}

export default Edificio
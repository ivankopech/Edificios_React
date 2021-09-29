import Edificio from "./Edificio";
const Edificios = ({edificios, onDelete, onToggle}) => {
    return (
        <>
            {edificios.map((edificio, index) => (
            <Edificio key={index} 
            edificio={edificio} 
                  onDelete={onDelete}  
                  onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Edificios;
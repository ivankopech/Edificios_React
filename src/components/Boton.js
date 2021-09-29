import React from "react";
import PropTypes from 'prop-types'

const Boton = ({color, text, onClick}) => {
    return(
    <button onClick={onClick} 
    style= {{backgroundColor: color}} 
    className='btn'>{text} 
    </button>
    ) 
}

Boton.defaultProps = {
    color: 'steelblue',
}

Boton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string, 
}

export default Boton
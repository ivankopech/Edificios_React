import PropTypes from 'prop-types'
import Boton from './Boton'

const Header = ({title, onAdd, showAdd}) => {
    return(
        <header className='header'>
            <h1> {title}</h1>
            <Boton 
            color ={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick= {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'registor de edificios',
}

export default Header;
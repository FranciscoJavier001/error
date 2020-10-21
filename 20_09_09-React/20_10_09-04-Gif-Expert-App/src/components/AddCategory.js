import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('') /** Estas son las dos funciones que tiene el inputvalue  */

    const handleInputChange = (e) => { 
        setInputValue(e.target.value) /** Esto me permite cambiar el texto */
    }

    const handleSubmit = (e) => { /** Aqui hacemos la peticion para que salga en el DOM  */
        e.preventDefault(); /** Esto evita el refresh de la pagina */
        if(inputValue.trim().length > 2){ /** Aqui nos dice que solo hace busquedas cuando tenga mas de 2 caracteres */
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }

    return ( /** Aqui directamente ya estamos en el DOM */

        //** Aqui le decimo que va a responder a handleSubmit */
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} /** Aqui le doy el valor para cambiarlo */
                />
            </form>
    )
}

AddCategory.prototype = { /** Para que utilicen nuestro componente con el pequeño candado con los argumentos que estoy esperando  */
    setCategories: PropTypes.func.isRequired
}
import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo') /** Estas son las dos funciones que tiene el inputvalue  */

    const handleInputChange = (e) => { 
        setInputValue(e.target.value) /** Esto me permite cambiar el texto */
    }

    const handleSubmit = (e) => {
        e.preventDefault(); /** Esto evita el refresh de la pagina */
        console.log('Submit hecho');
    }

    return ( /** Aqui directamente ya estamos en el DOM */

        //** Aqui le decimo que va a responder a handleSubmit */
        <form onSubmit={handleSubmit}>  
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} /** Aqui le doy el valor para cambiarlo */
                />
            </form>

    )
}

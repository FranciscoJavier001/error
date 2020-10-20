import React from 'react'

export const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

/** 
 * 1. Enzyme
 * 2. Enzyme to JSON
 * 3. Debe de mostrar el componente correctamente
 * shallow
 * wrapper
 * wrapper .toMatchSnapshot
 */
import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {
        // setcategories(['HunterXHunter', ...categories,]);
        setcategories(cats => [...cats, 'HunterXHunter']); /** El UseState me dio la habilidad de hacerlo directamente con el setcategories */
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => { /** El Map barre el arreglo */
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>

        </>
    )
}

//** Main es lo que se va a colocar en el index porque es el punto principal de la aplicacion, es la aplicacion como tal  */

import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const [user, setUser] = useState({});
    

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>

            {/* Esto lo hacemos para mostrar lo que tiene dentro */}
            <AppRouter /> 

        </UserContext.Provider>
    )
}

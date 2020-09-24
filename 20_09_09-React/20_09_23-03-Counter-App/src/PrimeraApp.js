import React from 'react';
// import React, { Fragment } from 'react';

const PrimeraApp = () => {

    const saludo = 'Hola Mundo';

    return (
        <>
        <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi Primera Applicacion</p>
        </>
    );
}

export default PrimeraApp;
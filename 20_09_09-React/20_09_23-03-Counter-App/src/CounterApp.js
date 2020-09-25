import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({frase1, frase2}) => {

    return (
        <>
        <h1>{frase1}</h1>
            <h2>{frase2}</h2>
        </>
    );
}

CounterApp.propTypes = {
    frase1: PropTypes.number.isRequired,
    frase2: PropTypes.string.isRequired,
}

CounterApp.defaultProps = {
    frase1: '',
    frase2: ''
}

export default CounterApp;
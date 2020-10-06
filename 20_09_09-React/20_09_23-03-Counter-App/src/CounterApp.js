import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value); // []
    

    // handleAdd
    const handleApp=(e)=>{
        // setCounter(counter + 1)
        setCounter((c)=> c+1);
    }

    const handleAppReset=(e)=>{
        // setCounter(counter + 1)
        setCounter((c)=> c=0);
    }

    const handleAppMin=(e)=>{
        // setCounter(counter + 1)
        setCounter((c)=> c-1);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleApp}>+1</button>
        <button onClick={handleAppReset}>Reset</button>
        <button onClick={handleAppMin}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
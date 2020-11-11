//** Para crearlo hay que utilizar rafcp */

import React, {useState} from 'react'; //** Simplemente desestructuramos el useState que pone ese nombre nomas por mamon, pero lo inicializamos en 10 en el index */
import PropTypes from 'prop-types'; //** Los Props */

const CounterApp = ({value = 10}) => { //** Creamos el Functional Component de la App */

    const [counter, setCounter] = useState(value); // [] //** Creamos las props que se va a recibir */
    

    // handleAdd Creamos los componentes que va a llevar nuestra app
    const handleApp=(e)=>{ 
        // setCounter(counter + 1)
        setCounter((c)=> c+1);
    }

    const handleAppReset=(e)=>{
        // setCounter(counter + 1)
        setCounter(value);
    }

    const handleAppMin=(e)=>{
        // setCounter(counter + 1)
        setCounter((c)=> c-1);
    }

    return ( //** Aqui hacemos el return que ocupa a huevo babel */
        <>  {/** El Fragment */}
        <h1>CounterApp</h1> {/** Nombre */}
        <h2>{counter}</h2> {/** Desestructurado el Counter */}

        <button onClick={handleApp}>+1</button> {/** Los Botones */}
        <button onClick={handleAppReset}>Reset</button>
        <button onClick={handleAppMin}>-1</button>
        </>
    );
}

CounterApp.propTypes = { //** Asi obligamos a recibir el parametro de value  */
    value: PropTypes.number.isRequired
}

export default CounterApp; //** Lo exportamos para que se muestre */
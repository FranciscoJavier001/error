import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({ /** Este es el estado original */
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2} = state /** Asi los extraemos */

    // console.log(counter);
    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr/>
            
            <button className="btn btn-primary"
            onClick={()=>{
                setState({ /**(Este es el nuevo objeto) Todas las propiedades que no esten en este nuevo estado se van a perder */
                    ...state,
                    counter1: counter1 + 1
                });
            }}
            >
                +1
            </button>
        </>
    )
}

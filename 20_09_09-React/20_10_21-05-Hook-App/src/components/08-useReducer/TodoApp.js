//******************************/
// Imporaciones que se pueden mandar llamar desde aqui
import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

//** Funcion de flecha que no recibe parametros, pero si las instrucciones que vienen despues, que establece el nuevo estado de los todos en el todoReducer */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //** Analiza un objeto, y lo transforma en el estado actual, se puso arriba porque es una funcion que se usa en el useEffect (que esta quiere decir "haz el cambio"), que ya se definio abajo y si esta null no regresa nada (pero creo que eso es mas para evitar conflictos) */
}

// Esto se importa desde todoReducer, estas son las acciones que viene en el Case
export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init); //** El useReducer, maneja el todoReducer que aqui lo importamos, maneja un arreglo con el state actual, y que tiene como estado inicial el init, y los todos que son las acciones actuales y el dispatch, que son las acciones que se generan y se actualizan en el localStorage */

    // Va a disparar un callback (que es una funcion que recibe como argumento otra funcion y la ejecuta), si los todos cambian eso significa que vamos a volver a ejecutar la funcion del localStorage y eso es lo que hace el useEffect 
    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todos ) ); /** Este va a guadar en el LocalStorage cualquier cambio que pase en los todos de la constante de abajo */ 
    }, [todos]); //** Como los todos cambiaron, entonces se actualizan y vuelve a iniciar la instruccion */

    
    //** Estas son funciones constantes que van a recibir un objeto con sus argumentos y puede generar las siguientes acciones que van a ser guardadas en el todoId */
    const handleDelete = ( todoId ) => {
        const action = { //** action se declara aqui, pero se va a acceder a ella desde el todoReducer en el switch, y si algo cambio en automatico se va a ver reflejado, porque esta comparado con el action.payload que se guarda el cambio en el todoId
            type: 'delete', 
            payload: todoId 
        }
        dispatch( action ); /** Aqui mandamos la nueva accion que se hizo arriba pero ya guardada y lanzada pero ahora como el init nuevo! */
    }
    //******************************/

    const handleToggle = ( todoId ) =>{ //** Recibe el todoId que es donde quiero hacer el cambio  */
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    // Aqui retornamos el numero de arrelos del Todo
    return ( 
        <div>
            <h1>TodoApp ( { todos.length } ) </h1> 
            <hr />

            {/* Estas con las clases de bootstrap */}
            <div className="row"> 
                <div className="col-7">

                    {/* Aqui es donde estamos a la espera de que sea clickeado cualquier boton y si  */}
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }  //** Aqui esta guardada la nueva accion, en caso que haga el delete */
                        handleToggle={ handleToggle } //** Se dispara cuando alguien toca con el cursor el parrafo  */
                    />
                </div>

                {/* Aqui es donde se muestra lo que se va a agregar, es el input y el boton */}
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
                
            </div>
        </div>
    )
}
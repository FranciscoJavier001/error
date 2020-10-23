import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

// Esto se importa desde todoReducer.js, estas son las acciones que viene en el Case
export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init); /** Aqui sabe a que reducer hay que mandarle la informacion y cuando cambia el State va a redibujar lo que cambie, entonces al Dispatch hay que mandarle la accion y es el segundo argumento */
    
    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]);

    // EStas son las acciones que viene en el case
    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId /** Esta es el nuevo estado despues de lo que se hace */
        }
        dispatch( action ); /** Aqui mandamos la nueva accion */
    }

    const handleToggle = ( todoId ) =>{
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

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
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

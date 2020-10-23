import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

//** Cuando se recarga este componente se vuelve a iniciar esta funcion del init la cual lee el localstorage y me ayuda a establecer el estado inicial del reducer */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //** Esto permite que se lean los todos, y se recupera con el JSON.parse y este se va a regresar como un arreglo o si no hay nada se regresa un arreglo vacio que ese es el inicial, y si esta null entonces retorna un arreflo vacio */
}

// Esto se importa desde todoReducer.js, estas son las acciones que viene en el Case
export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init); /** Aqui sabe a que reducer hay que mandarle la informacion y cuando cambia el State va a redibujar lo que cambie, entonces al Dispatch hay que mandarle la accion y es el segundo argumento */
    // Init va a computar el estado inicial para que esta funcion no se este ejecutando y ejecutando cada vez que hay cambios, esta es una funcion comun y corriente y va a regresar el arreglo vacio, y lo que sea que retorne es lo que va a mostrar el initialState
    
    // Va a disparar un callback y la dependencia que va a tener van a ser los Todos, si los Todos cambian eso significa que vamos a volver a guardar en el localStorage y eso es lo que hace el useEffect 
    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todos ) ); /** Asi se guarda en el localStorage - Este va a guadar en el LocalStorage cualquier cambio que pase en los todos de la constante de arriba */ 
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

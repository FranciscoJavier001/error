import React from 'react';

// Estas son las propTypes que tiene que recibir
export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => { 

    return (
        <li
            key={ todo.id } //** Aqui creamos el key que va a ser el todo.id, que importamos en el TodoList */
            className="list-group-item" //** Clase de bootstrap que hace una lista de grupal */
        >  
            <p 
                className={ `${ todo.done && 'complete' }` } //** Aqui hicimos la desestructuracion de archivos, que nos manda la clase del css, donde pusimos si el todo.done &&  */
                onClick={ () => handleToggle( todo.id ) }
            > 
                { index + 1}. { todo.desc }   
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
    )
}

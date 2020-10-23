
// Este es el que importa las acciones
export const todoReducer = ( state = [], action ) => {

    // Aqui mostramos las acciones que viene directamente del TodoApp.js
    // Crear las acciones y mandarselas al reducer, el reducer las ejecuta, me regresa un nuevo estado y como estoy trabajando en base a mi useReducer este se va a encargar de redibujar lo que hay que redibujar 
    switch ( action.type ) { /** Wey, esto ya es el boton, con toda la logica para que agrege una nueva tarea */
        case 'add':
            return [ ...state, action.payload ]; /** Como nos damos cuenta, aqui se va a agregar, y la ltima va a ser la primera, manteniendo la fotografia como estaba antes*/

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); // 123123123


        case 'toggle': 
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case 'toggle-old':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }

            })

        default:
            return state; /** Si vemos que no hay cambio manda el mismo estado */
    }


}
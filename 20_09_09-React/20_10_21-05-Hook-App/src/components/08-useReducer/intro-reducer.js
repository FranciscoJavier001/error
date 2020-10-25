
// const initialState = [{ //** Inicializamos el initialState, pero no importa lo que hagamos */
//     id: 1,
//     todo: 'Comprar pan',
//     done: false
// }];

// const todoReducer = ( state = initialState, action ) => { //** Funcion de flecha que recibe el state como primer parametro que esre es igual al initial state */
    
//     if ( action?.type === 'agregar' ) {
//         return [ ...state, action.payload ];
//     }

//     return state;
// }

// let todos = todoReducer();

// const newTodo = {
//     id: 2,
//     todo: 'Comprar leche',
//     done: false
// }

// const agregarTodoAction = {
//     type: 'agregar',
//     payload: newTodo
// }

// todos = todoReducer( todos, agregarTodoAction );

// console.log(todos);


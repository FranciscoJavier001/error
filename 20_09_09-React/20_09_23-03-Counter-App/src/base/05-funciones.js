

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: 'ABD123',
        username: 'El_Papi1502'
    });


export const getUsuarioActivo = (nombre) => ({
    uid: 'ABC678',
    username: nombre
})
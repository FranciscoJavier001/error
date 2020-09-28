const activo = true;

/** 
 * let mensaje = '';
 * 
 * if (!actio) {
 * mensaje = 'Activo';
 * } else {
 * mensaje = 'Inactivo';
 * }
 */

// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (activo) ? 'Activo' : null;
const mensaje = (activo === true) && 'Activo'

console.log(mensaje);
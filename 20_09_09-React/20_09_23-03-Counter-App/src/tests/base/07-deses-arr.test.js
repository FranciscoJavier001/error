import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion ', () => {
    test('debe de retornas un string y un numero ', () => {
        
        const [letras, numeros] = retornaArreglo() //['ABC', 123];

        // console.log(typeof numeros);

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
    
})

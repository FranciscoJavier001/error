const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Heroe Async ', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    // test('debe de obtener un error si el heroe por id no existe ', (done) => {
    //     const id = 1;
    //     getHeroeByIdAsync(id)
    //     .catch(error => {
    //         expect(error).toBe('no se pudo encontrar el heroe!!!');
    //         done();
    //     });
    // });
    
    
})

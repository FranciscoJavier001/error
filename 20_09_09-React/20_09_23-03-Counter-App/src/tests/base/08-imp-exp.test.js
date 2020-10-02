const { getHeroeById, getHeroeByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas en funciones de Heroes', () => {
    test('debe de retornar un heroe por id ', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData)
    });

    test('debe de retornar un undefined si heroe no existe ', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined)
    });

    // debe de retornar un arreglo con los heroes de DC
    test('debe de retornar un arreglo con los heroes de DC ', () => {
        
        const owner = 'DC';
        const heroes = getHeroeByOwner(owner);
        
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    })
    
    test('debe de retornar un arreglo con los heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroeByOwner(owner);

        expect(heroes.length).toBe(2);
    })
})

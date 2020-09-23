import { getheroeById, getheroebyOwner } from "../../base/08-imp-ex";
import { heroes } from "../../data/heroes";

describe('Pruebas en funciones de heroes',()=>{
    test('Debe de retornar un Heroe por Id', () => {
        const id = 1;
        const heroe = getheroeById(id);
        
        const heroData = heroes.find(h=>h.id === id);

        expect(heroe).toEqual(heroData);
    })
    test('Debe de retornar Udefined si Hero no existe', () => {
        const id = 10;
        const heroe = getheroeById(id);        

        expect(heroe).toBe(undefined);
    })
    
    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getheroebyOwner(owner);
        const heroesData = heroe.filter(h=>h.owner === owner);
       
        expect(heroe).toEqual(heroesData);
    })
    
    test('Debe retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroe = getheroebyOwner(owner);       
        expect(heroe.length).toBe(2);
    })
})
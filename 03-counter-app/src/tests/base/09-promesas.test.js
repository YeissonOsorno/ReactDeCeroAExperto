import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe('Prueba 09-promesas',()=>{
    test('Retornar un Héroe Async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            done()
        })
    });

    test('Retornar Obtener un error si el  Héroe por error no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error=>{
            expect(error).toBe("No se pudo encontrar el Héroe");
            done()
        })
    });
    
})
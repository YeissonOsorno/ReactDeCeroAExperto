import { getSaludo }  from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string',()=>{
    test('getSaludo debe de retornar Hola Yeisson',()=>{
        const nombre = 'Yeisson';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre + '!')
    })

    test('getSaludo deber de retornar Hola Carlos! si no hay arg nombre ', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
    
})
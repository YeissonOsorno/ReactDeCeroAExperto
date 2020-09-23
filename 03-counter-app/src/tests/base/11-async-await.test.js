import { getImagen } from "../../base/11-async-await";

describe('Pruebas con aync await',()=>{
    test('Debe de retornar el URl de la Imagen', async() => {
        const url = await getImagen();
        expect(url.includes('http')).toBe(true);
        console.log(url)
    })
    
})
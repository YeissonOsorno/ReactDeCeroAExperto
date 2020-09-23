import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones',()=>{

    test('getUser debe de retonar un objeto ', () => {
        const userTest = {
            uid:'ABC123',
            userName:'El_papi1502'
        }

        const user = getUser();
        
        expect(user).toEqual(userTest);
    })
     test('getUsuarioActivo debe de retornar un Objeto ', () => {
         const nombre = "Yeisson";
        
        const userTest ={
            uid:'ABC567',
            userName:nombre
        }
        const user= getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
     })
     
})
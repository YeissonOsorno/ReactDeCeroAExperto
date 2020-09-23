describe('Pruebas en el archivo demon.test.js',()=>{
    test('Deben de ser iguales los strings ', () => {
        //1. inicializacion
        const message = 'Hola Mundo';
    
        //2. Estimulo
        const message2 = "Hola Mundo";
    
        //3. Observar el comportamiento
        expect(message).toBe(message2);
    })   
})

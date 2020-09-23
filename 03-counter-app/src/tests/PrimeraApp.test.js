//import {render} from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <primeraApp/>',()=>{
    /*test('Debe de mostrar el mesanje "Hola soy Goku"', () => {
        const saludo ="Hola Soy Goku";
        const wrapper = render(<PrimeraApp saludo={saludo}/>)

        expect(wrapper.getByText(saludo)).toBeInTheDocument();
    })*/

    test('Debe de mostrar el componente bien cargado"', () => {
        const saludo = 'Hola Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola Soy Goku';
        const subtitulo = 'El Rey de los Sayayines';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>)

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
        
    })
    
    
})
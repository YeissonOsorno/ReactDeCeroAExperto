import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Prueba en componente <CounterApp/>', () => {
    let wrapper   = shallow(<CounterApp />);
    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>);
    })
    test('Should show correctly', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('Should values correctly', () => {
        const value = 0;
        const wrapper = shallow(<CounterApp value={value}/>);
        const textoValue = wrapper.find('h2').text();
        expect(textoValue).toBe(value.toString())
    });

    test('Debe de incrementar con el boton +1', () => {
       
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('1')
       
    });

    test('Debe de decrementar con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('-1')
       
    });

    test('Debe de Resetear al valor inicial', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect (counterText).toBe('105');
       
    });
    
})

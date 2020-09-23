import React,{useState}from 'react';
import PropTypes from 'prop-types';
const CounterApp =({value=0})=>{

    //Hooks useState
    const [counter,setCounter] = useState(value);
    
    //handle add
    const handleAdd=()=>{
      setCounter(counter+1); //Forma 1 de setear el state de un componente
      //setCounter((c)=>c+1); //Forma 2 de setear el state de un componente
    }
    //handleSubstract
    const handleSubtract =()=>setCounter(counter-1);

    //handleReset 
    const handleReset =()=>setCounter(value);
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSubtract}> -1</button>
        </>
    )
}

CounterApp.propTypes ={
    value:PropTypes.number
}

export default CounterApp;


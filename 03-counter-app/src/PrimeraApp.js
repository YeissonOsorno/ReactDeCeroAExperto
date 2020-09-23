import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ({saludo,subtitulo})=>{
    //Antes del return puedo poner cualquier codigo JavaScript
    
    return (
        <>
            <h1>{saludo}!!</h1>
            {/*<pre>{JSON.stringify(greet,null,3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    )

}
//Obligamos a los devs que envien los properties a nuectro componente
PrimerApp.propTypes ={
    saludo:PropTypes.string.isRequired
}

//Default Props
PrimerApp.defaultProps={
    subtitulo:'Soy un Subtitulo'
}
export default PrimerApp;
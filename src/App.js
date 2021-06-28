import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado'
import Spinner from './components/Spinner';
//importante para usar los styled components debemos abrir la terminar y cargar la libreria que aparece en la web de emotion, luego importamos styled. El styled crea una eqtiqueta html
import styled from '@emotion/styled';

const Contenedor = styled.div `

  max-width:600px;
  margin: 0 auto;
`;
//Las etiquetas de styled component tienen apertura y cierre en base a la etiqueta que sea, si es un div abre y cierra, si es img no cierra.
const ContenedorFormulario = styled.div `
  
  background-color: #FFF;
  padding: 3rem;
  `;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year:'',
      plan:''
    }
  });

  //vamos a hacer que el spinner aparezca solo cuando lo precisemos 

  const [ cargando, guardarCargando ] = useState (false);
//extraer datos 

const { cotizacion, datos } = resumen;
  

  return (
    <Contenedor>
      <Header 
      //le pasamos el props
      titulo = 'Cotizador de seguros - cars insurance quotes - by Sofía M Fernández'
      />
      <ContenedorFormulario> 
        <Formulario 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null }
        
        <Resumen 
          datos={datos}
        />

        { !cargando ?
            <Resultado 
              cotizacion= {cotizacion}
            /> : null
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p `
   background-color: rgb(127, 224, 237);
   margin-top: 2rem;
   padding: 1rem;
   text-align:center;

`;

const ResultadoCotizacion = styled.div `
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;


`;

const TextoCotizacion = styled.p `
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin:0;

`;

const Resultado = ({cotizacion}) => {
    return ( 

        //si la cotización es igual a 0, o sea, no hay datos, el ternario muestra el <p>, si hay datos, muestra la cotizacion
        (cotizacion === 0) 
        
            ? <Mensaje>Elige marca, año y tipo de seguro </Mensaje> 
            
            : 
            //el paréntesis da implícito el return
            ( <Fragment>
                <ResultadoCotizacion>
                    <TransitionGroup
                        component='div'
                        className='resultado'
                    
                    >
                        <CSSTransition
                            classNames='resultado'
                            key= {cotizacion}
                            timeout={{enter: 500, exit: 500}}
                        
                        >
                            <TextoCotizacion>El total es: $ {cotizacion} </TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
              </Fragment>
            )
    )
    
}
//Importante: para hacer la declaración la palabra propTypes, comienza con mayúscula y continúa como camelcase. Pero dentro del objeto PropTypes comienza con mayúscula y sigue con camelcase. 
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;
import React from 'react';
import { Container } from 'react-bootstrap';
import Cards from './Cards';

const ListaColores = ({arregloColores,borrarColores}) => {

  

    return (
       <Container className="my-5 row">
       
          {
            arregloColores.map((item)=><Cards colores={item} key={item.id}></Cards>)
          }

        
       </Container>
  
    );
};

export default ListaColores;
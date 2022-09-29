import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/ListaColores.css'
import Cards from './Cards';

const ListaColores = ({arregloColores,borrarColores}) => {

  

    return (
       <Container className="my-5 row">
       
         {
           
            arregloColores.map((item,indice)=><Cards className="col-12 col-md-6" style={item} color={item} key={indice} nombre={item} borrarColores={borrarColores}/>)
         }

        
       </Container>
  
    );
};

export default ListaColores;
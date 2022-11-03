import React, { useEffect } from "react";
import { useState } from "react";
import "../style/Formulario.css";
import {  Button, Container } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { consultarApi } from "../helper/queries";

const Formluario = () => {
  
  
  const [arregloColores, setArregloColores] = useState([]);

  useEffect(()=>{
    consultarApi().then((respuesta)=>{
      console.log(respuesta)
      setArregloColores(respuesta)
    })
  },[])

 

  return (
    <>
     <div className="mt-5">
       <h1 className="text-center">Paleta de colores</h1>
     </div>
    <Container className="my-5">
      <form>
        <div className="d-flex mb-3">
        <div className="cajaColores"></div>
        <input 
        type="text" 
        className="form-control w-75 inputColor mt-3"
       
        required
        >
        </input>
        </div>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </form>
      <ListaColores arregloColores={arregloColores}/>
    </Container>
    </>
  );
};

export default Formluario;

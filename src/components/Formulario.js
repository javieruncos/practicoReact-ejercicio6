import React, { useEffect } from "react";
import { useState } from "react";
import "../style/Formulario.css";
import {  Button, Container } from "react-bootstrap";
import ListaColores from "./ListaColores";

const Formluario = () => {
  
   const coloresLocalStorage = JSON.parse(localStorage.getItem("listaColores"))||[];

  const [Colores, setColores] = useState("");
  const [arregloColores, setArregloColores] = useState(coloresLocalStorage);

  useEffect(()=>{
     localStorage.setItem("listaColores",JSON.stringify(arregloColores))
  },[arregloColores])

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, Colores]);
    setColores("");
  };

  const borrarColores = (Color) => {
    let newArreglo = arregloColores.filter((item)=>item !== Color)
    setArregloColores(newArreglo);
  };

  return (
    <Container className="my-5">
      <form onSubmit={handleSubmit}>
        <div className="d-flex mb-3">
        <div className="cajaColores" style={{'background':`${Colores}`}}></div>
        <input 
        type="text" 
        className="form-control w-75 inputColor mt-3"
        onChange={(e)=>setColores(e.target.value)}
        value={Colores}
        >
        </input>
        </div>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </form>
      <ListaColores
        arregloColores={arregloColores}
        borrarColores={borrarColores}
      />
    </Container>
  );
};

export default Formluario;

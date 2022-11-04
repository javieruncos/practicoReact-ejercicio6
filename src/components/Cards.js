import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { borrarColor, consultarApi } from "../helper/queries";
import '../style/Cards.css'

const Cards = ({colores,setArregloColores}) => {
   
    const borrar = ()=>{
      borrarColor(colores._id).then((respuesta)=>{
        if(respuesta.status===200){
           consultarApi().then((respuesta)=>{
            setArregloColores(respuesta)
           })
          console.log("se borro el color correctamente")
        }else{
          console.log("error al intentat borrar un color")
        }
      })
    }



  return (
    <>
      <Card className="col-12 col-md-4">
        <div className="cajaCard" style={{'background':`${colores.color}`}}></div>
        <Card.Body>
          <Card.Title>{colores.color}</Card.Title>
          <Button variant="primary" onClick={borrar}>borrar</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;

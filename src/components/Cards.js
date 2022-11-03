import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../style/Cards.css'

const Cards = ({colores}) => {
  return (
    <>
      <Card className="col-12 col-md-4">
        <div className="cajaCard" style={{'background':`${colores.color}`}}></div>
        <Card.Body>
          <Card.Title>{colores.color}</Card.Title>
          <Button variant="primary">borrar</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;

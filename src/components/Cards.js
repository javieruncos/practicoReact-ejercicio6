import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../style/Cards.css'

const Cards = ({nombre,style}) => {
  return (
    <>
      <Card className="col-12 col-md-4">
        <div className="cajaCard" style={{'background':`${style}`}}></div>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Button variant="primary">borrar</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;

import React, { useEffect } from "react";
import { useState } from "react";
import "../style/Formulario.css";
import {  Button, Container,Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { consultarApi, crearColor } from "../helper/queries";
import {useForm} from "react-hook-form"

const Formluario = () => {
  
  const{register,handleSubmit,formState:{errors},reset}=useForm()

  const [arregloColores, setArregloColores] = useState([]);
  const [style, setStyle] = useState("")

  useEffect(()=>{
    consultarApi().then((respuesta)=>{
      console.log(respuesta)
      setArregloColores(respuesta)
    })
  },[])

    const onSubmit =(data)=>{
       console.log(data)
       crearColor(data).then((respuesta)=>{
        if(respuesta.status === 201){
          console.log("el color de agrego correctamente")
          setArregloColores([...arregloColores,data])
          reset()
        }else{
          console.log("error al intentar  crear el color")
        }
       })
    }



  return (
    <>
     <div className="mt-5">
       <h1 className="text-center">Paleta de colores</h1>
     </div>
    <Container className="my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex mb-3">
        <div className="cajaColores" style={{"background":style}}></div>
        <input 
        type="text" 
        className="form-control w-75 inputColor mt-3"
         {...register("color",{
          required:"el nombre del color es obligatorio",
          minLength:{
            value:3,
            message:"la cantidad minima de caracteres es de 3"
          }
         })}
         onChange={(e)=>setStyle(e.target.value)}
         
        >
        </input>
        </div>
        <Form.Text className="text-danger me-5">
           {errors.color?.message}
        </Form.Text>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </form>
      <ListaColores arregloColores={arregloColores} setArregloColores={setArregloColores}/>
    </Container>
    </>
  );
};

export default Formluario;

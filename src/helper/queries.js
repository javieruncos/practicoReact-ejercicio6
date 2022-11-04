const url = process.env.REACT_APP_API_COLOR;


export const consultarApi = async()=>{

    try {

        const respuesta = await fetch(url)
        const listaColores = await respuesta.json()
        return listaColores

    }catch(errors){
        console.log(errors)
        return false
    }
  
}



export const crearColor = async(color)=>{

    try {
        const respuesta = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            
            },
            body:JSON.stringify(color)
        })
        return respuesta
    } catch (error) {
        console.log(error)
        return false
    }
  
}



export const borrarColor = async (id)=>{
    try {
        const respusta = await fetch(url+"/"+id,{
            method:"DELETE"
        })
        return  respusta;
    } catch (error) {
        console.log(error)
        return false
    }
   
   
}
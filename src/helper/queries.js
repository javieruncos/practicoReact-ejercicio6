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
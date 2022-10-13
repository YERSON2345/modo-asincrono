//Recordar que se usa common cuando se usan los require()
const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuracion de request
let config = {
    url : url,
    method : 'get'
}

const f = async()=>{
    try {
        let response = await axios(config)
        const tipos = response.data.results
        //recorrer el arreglo
        tipos.forEach((element)=>{
            console.log(element.name)
            console.log("******************************")
        })
        
    } catch (error) {
        console.log(Error(error))
    }
}
f()
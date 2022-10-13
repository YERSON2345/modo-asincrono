//Recordar que se usa common cuando se usan los require()
const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuracion de request
let config = {
    url : url,
    method : 'get'
}

//realizar la opreacion async
axios(config)
      .then(response => response.data.results)
        .then(data =>{
        data.forEach(function(tipo){
            console.log (`Tipo: ${tipo.name}`)
            console.log(`*************************`)
        })
      })
      .catch((error) => {
        console.log(Error(`Error : $error`))
      })
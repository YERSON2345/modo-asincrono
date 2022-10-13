//Recordar que se usa common cuando se usan los require()
const axios = require('axios')

const url = "https://the-dune-api.herokuapp.com/books/7"

//configuracion de request
let config = {
    url : url,GI
    method : 'get'
}

//realizar la opreacion async
axios(config)
      .then(response => response.data)
        .then(data =>{
        data.forEach(function(tipo){
            console.log (`Nombre de libro: ${tipo.title}`)
            console.log(`*************************`)
        })
      })
      .catch((error) => {
        console.log(Error(`Error : ${error}`))
      })
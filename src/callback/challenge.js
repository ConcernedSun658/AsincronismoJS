//Importamos el modulo para hacer peticiones
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Direccion de la API
let API = "https://rickandmortyapi.com/api/character/"


//Funcion principal
function fetchData(url_api, callback){

    //Instaciamos la conexion
    let xhttp = new XMLHttpRequest();

    //Abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open("GET", url_api, true);//Validacion del llamado
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){//El state 4 es el ultimo de la peticion
            if(xhttp.status === 200){//Verificamos que el estatus esta en 200, que nos dice que todo esta bien
                //El primer valor del callback es el error y el siguiente es el resultado
                callback(null, JSON.parse(xhttp.responseText))//Se ejecuta el callback con el resultado
            }else{
                const error = new Error("Error"+ url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();//Enviamos peticion
}

fetchData(API, function(error1, data1){//Buscamos la lista de personajes
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){//Buscamos el id de Rick
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){//Se consulta la dimension
            if(error3) return console.error(error3);

            //Mostramos los resultados de nuestra peticion
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})
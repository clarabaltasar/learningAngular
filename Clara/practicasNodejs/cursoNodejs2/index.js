//SI QUIERO EJECUTAR START (EN PACKAGE.JSON) PONGO NPM START, SI QUIERO EJECUTAR CUALQUIER OTRO PONGO NPM RUN CUALQUIEROTRO

const express = require("express");
const colors = require("colors");
const server =  express();
//otra forma de crear un servidor
server.get("/", function(req, res) {
    res.send("<h1>Hola Mundo con Express y Nodejs</h1>");
    res.end();
});

server.listen(3000, function() {
    console.log("Server en puerto 3000".red);
})

//http sirve para comunicar tu ordenador con un servidor
//const http = require("http");

/*me creo un servidor que con req recibe informacion de los clientes y con res les da una respuesta
Cuando un usuario visita mi sitio web le respondo con Hola Mundo...
y ejecturo listen para poner en q puerto va a escuchar el servidor*/
/*const handleServer = function(req, res) {
    res.writeHead(200, {"Content-type": "text/html"}); //peticion correcta
    res.write("<h1>Hola Mundo desde Nodejs</h1>");
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log("Servidor en el puerto 3000".magenta);
});*/

//otra forma con http
/*http.createServer(function(req, res) { //req = request = peticion, res = response
    res.writeHead(200, {"Content-type": "text/html"}); //peticion correcta
    res.write("<h1>Hola Mundo desde Nodejs</h1>");
    res.end();
}).listen(3000);*/

//os sirve para conseguir informacion sobre las operaciones del sistema operativo
/*const os = require("os");
//fs sirve para trabajar con los ficheros del sistema operativo
const fs = require("fs");

console.log(os.platform());
console.log(os.release());
console.log("free mem: ", os.freemem(), "bytes");
console.log("total mem: ", os.totalmem(), "bytes");

fs.writeFile("./texto.txt", "linea uno", function(err) {
    if(err) {
        console.log(err);
    }console.log("Archivo creado");
});

fs.readFile("./texto.txt", function(err, data) {
    if(err) {
        console.log(err);
    }console.log(data.toString());
})*/

/*en nodejs en vez de hacer una funcion y guardar el resultado en una cte y q haya q esperar
 a que esto se ejecute para q se vayan ejecutando las siguientes lineas de codigo,
 lo q se hace es una funcion a la que le añades otra funcion en la q pones lo q quieres q haga
 y asi se pueden ir ejecutando las siguientes lineas de cdigo q hay fuera sin problema*/

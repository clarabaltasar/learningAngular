var http = require("http"),
    fs = require("fs"),
    parser = require("./params_parser.js");

var p = parser.parse;

//Programación síncrona
/* var html = fs.readFileSync("./index.html");

http.createServerSync(function(req, res) {
    res.write(html);
    res.end();
}).listen(8080);

//Programación asíncrona
var html = fs.readFile("./index.html", function(err,html){
    
    http.createServer(function(req, res) {
        res.write(html);
        res.end();
    }).listen(8080);
}); */

//Programación asíncrona 2
/* http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err,html){
        res.writeHead(200,{"Content-Type":"application/json"}); //200 = todo salio bien
        res.write(JSON.stringify({nombre: "Clara", username:"ralph"}));
        res.end();
        });
}).listen(8080); */

//Variables en una vista
/* http.createServer(function(req, res) {
    fs.readFile("./index.html", function(err,html){
        var html_string = html.toString(); //porque html es un valor binario del archivo que estamos leyendo, no una cadena.
        //Expresión regular que busca en el HTML donde haya {x}
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "Ralph";
        //variables = ['nombre']
        for(var i=variables.length-1; i>=0;i--) {
            //lo ejecutamos como código de JavaScript para obtener el valor de dicha variable
            var value = eval(variables[i]);
            //Reemplazamos el contenido con llaves {x} por su valor correspondiente
            html_string = html_string.replace("{"+variables[i]+"}", value);
        }

        res.writeHead(200,{"Content-Type":"text/html"}); //200 = todo salio bien
        res.write(html_string);
        res.end();
        });
}).listen(8080); */

//Leer parametros de un formulario
http.createServer(function(req, res) {

    if (req.url.indexOf("favicon.ico") > 0) {
        return;
    }

    console.log("======\n\n");
    console.log(req);
    console.log("======\n\n");

    fs.readFile("./index.html", function(err,html){
        var html_string = html.toString(); //porque html es un valor binario del archivo que estamos leyendo, no una cadena.
        var arreglo_parametros = [], parametros = {};
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "";

        var parametros = p(req);

        

        for(var i=variables.length-1; i>=0;i--) {
            //[nombre,apellido]
            var variable = variables[i];
            //parametros[variable]
            //parametros[]
            html_string = html_string.replace("{"+variable+"}", parametros[variable]);
        }

        res.writeHead(200,{"Content-Type":"text/html"}); //200 = todo salio bien
        res.write(html_string);
        res.end();
        });
}).listen(8080);




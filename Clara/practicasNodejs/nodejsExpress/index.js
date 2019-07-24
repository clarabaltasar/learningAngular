const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("appName", "Mi primer server");
app.set("views", __dirname + "/views") //para saber donde está en mi ordenador
app.set("view engine", "ejs");

//middlewares -> enseñan en la consola las peticiones q estamos haciendo al seridor
app.use(morgan("dev"));

app.use(function(req, res, next) {
    console.log("request url: " + req.url);
    next();
});

app.use((req, res, next) => {
    console.log("Ha pasado por esta funcion");
    next();
});

//rutas -> van bajando y si coincide con alguna hace lo q esta indique y sino hace lo q indique *
app.get("/", (req, res) => {
    res.end("Hello World");
});

app.get("/login", (req, res) => {
    res.end("Aqui va el login");
});

//* = cualquier otra ruta
app.get("*", (req, res) => {
    res.end("Not found");
});

app.listen(3000, function() {
    console.log("Servidor funcionando");
    console.log("Nombre de la app: ", app.get("appName"));
})
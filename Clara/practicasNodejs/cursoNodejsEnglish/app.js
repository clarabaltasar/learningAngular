const express = require("express");
const chalk = require("chalk"); // se usa para cambiar el color
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const nav = [ { link: "/books", title:"Books" }, { link: "/authors", title: "Authors" } ];
const bookRouter = require("./src/routes/bookRoutes")(nav);

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/books", bookRouter);

app.get("/", (req, res) => {
    res.render(
        "index", 
        { 
            nav: [ { link: "/books", title:"Books" }, { link: "/authors", title: "Authors" } ], 
            title: "Library" 
        });
});

app.listen(port, () => {
    debug(`Listening on port ${chalk.green("3000")}`);
});
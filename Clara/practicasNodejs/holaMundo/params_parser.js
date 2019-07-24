function parse(req) {
    var arreglo_parametros = [], parametros = {};
    if (req.url.indexOf("?") > 0) {
        //separo el path (/?nombre=Ralph) de los parametros y me devuelve ['/','nombre=Ralph&data=algo']
        var url_data = req.url.split("?");
        var arreglo_parametros = url_data[1].split("&");
        //[nombre=Ralph,data=algo]
    }

    for(var i=arreglo_parametros.length-1; i>=0; i--) {
        var parametro = arreglo_parametros[i];
        //nombre=Ralph
        var param_data = parametro.split("=");
        //[nombre,Ralph]
        parametros[param_data[0]] = param_data[1];
        //{nombre:Ralph}
    }

    for(var i=variables.length-1; i>=0;i--) {
        //[nombre,apellido]
        var variable = variables[i];
        //parametros[variable]
        //parametros[]
        html_string = html_string.replace("{"+variable+"}", parametros[variable]);
    }
    
    return parametros;
}

module.exports.parse = parse;
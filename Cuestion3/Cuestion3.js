function f1() {
    return new Promise(function (resolve, reject) {
        console.log('soy el primero');
        resolve(console.log('He ganado'));
    });
}
function f2() {
    console.log('soy el segundo');
}
f1().then(f2);
/////////////////////////////////////////////////////////////////
var url_api = "https://jsonplaceholder.typicode.com";
fetch("".concat(url_api, "/users")) //fetch  devuelve una promesa. Hace una peticion get a la api
    .then(function (response) { return isResponseOk(response); }) //si sale bien la conexion parseamos el json
    .then(function (users) {
    var usuario = users.map(function (user) { return "ID: ".concat(user.id, " \nNombre: ").concat(user.name, " \nEmail: ").concat(user.email, " \nTelefono: ").concat(user.phone); });
    for (var _i = 0, usuario_1 = usuario; _i < usuario_1.length; _i++) {
        var iterator = usuario_1[_i];
        console.log(iterator);
    }
})["catch"](function (error) { return console.error("Error controlado por catch: ", error); }); //si algo sale mal, mostramos el error por consola
//funcion para controlar los errores a la hora de realizar la conexion
var isResponseOk = function (response) {
    if (!response.ok)
        throw new Error(response.status);
    return response.json();
};

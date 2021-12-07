function f1() {
    return new Promise((resolve, reject) => {
        console.log('soy el primero');
        resolve(console.log('He ganado'));
    });
}

function f2() {
    console.log('soy el segundo');
}

f1().then(f2);

/////////////////////////////////////////////////////////////////

const url_api: string = "https://jsonplaceholder.typicode.com";

fetch(`${url_api}/users`)//fetch  devuelve una promesa. Hace una peticion get a la api
    .then(response => isResponseOk(response))//si sale bien la conexion parseamos el json
    .then(users => {//si sale bien el parseo mostramos el resultado por consola
        let usuario = users.map((user:any) => `ID: ${user.id} \nNombre: ${user.name} \nEmail: ${user.email} \nTelefono: ${user.phone}`);
        for (const iterator of usuario) {
            console.log(iterator);
        }
    })
    .catch(error => console.error("Error controlado por catch: ",error));//si algo sale mal, mostramos el error por consola
    
//funcion para controlar los errores a la hora de realizar la conexion
const isResponseOk = (response:any) => {
    if (!response.ok)
        throw new Error(response.status);
    return response.json()
}



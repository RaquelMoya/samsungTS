"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direction_1 = require("./direction");
var mail_1 = require("./mail");
var person_1 = require("./person");
var phone_1 = require("./phone");
// instanciamos direction, mail y phone para pasárselo a las variables
// para Raquel : 
var dir1 = new direction_1.Direction("Rio Tajo", 20, 6, "B", 46011, "Valencia", "Valencia");
var mail1 = new mail_1.Mail("personal", "raquel@gmail.com");
var ph1 = new phone_1.Phone("fijo", 961126578);
// para Javier :  
var dir2 = new direction_1.Direction("Blasco Ibañez", 2, 3, "A", 46024, "Valencia", "Valencia");
var mail2 = new mail_1.Mail("personal", "javier@gmail.com");
var ph2 = new phone_1.Phone("fijo", 962894264);
// para Jose :  
var dir3 = new direction_1.Direction("Monteolivete", 0, 1, "C", 46100, "Valencia", "Valencia");
var mail3 = new mail_1.Mail("personal", "jose@hotmail.com");
var ph3 = new phone_1.Phone("fijo", 962334455);
// ---------------- MAIN REGISTER -------------------
console.log("Main Register: ");
var Raquel = new person_1.Person("Raquel", "Moya Simó", 32, "76112233-L", "01/02/1993", "azul", "mujer", [dir1], [mail1], [ph1], "nota1");
console.log(Raquel);
var Javier = new person_1.Person("Javier", "Sarabia Perez", 28, "25223344-K", "02/03/1992", "amarillo", "hombre", [dir2], [mail2], [ph2], "nota2");
console.log(Javier);
var Jose = new person_1.Person("Jose", "Lopez Rodríguez", 31, "71334455-J", "03/03/1991", "negro", "hombre", [dir3], [mail3], [ph3], "nota3");
console.log(Jose);
// Modificar un registro 
var dirMod1 = new direction_1.Direction("Calle Principal", 3, 5, "A", 46020, "Valencia", "Valencia");
var mailMod1 = new mail_1.Mail("trabajo", "raquel@lateua.com");
var phMod1 = new phone_1.Phone("móvil", 662112233);
Raquel.setDirections([dirMod1]);
Raquel.setMails([mailMod1]);
Raquel.setPhones([phMod1]);
// Búsqueda de usuario por DNI + Modificación del registro  
if (Raquel.getDni() == "76112233-L") {
    console.log("El DNI buscado es: " + Raquel.getDni() + " y pertenece a " + Raquel.getName());
    console.log("Modificación del registro de " + Raquel.getName() + ":");
    console.log(Raquel);
}
else {
    console.log("El DNI instroducido no se ha encontrado");
}

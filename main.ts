import { Direction } from "./direction";
import { Mail } from "./mail";
import { Person } from "./person";
import { Phone } from "./phone";

// instanciamos direction, mail y phone para pasárselo a las variables

// para Raquel : 
let dir1 = new Direction ("Rio Tajo", 20, 6, "B", 46011, "Valencia", "Valencia");
let mail1 = new Mail ("personal", "raquel@gmail.com");
let ph1 = new Phone ("fijo", 961126578);

// para Javier :  

let dir2 = new Direction ("Blasco Ibañez", 2, 3, "A", 46024, "Valencia", "Valencia");
let mail2 = new Mail ("personal", "javier@gmail.com");
let ph2 = new Phone ("fijo", 962894264);

// para Jose :  

let dir3 = new Direction ("Monteolivete", 0, 1, "C", 46100, "Valencia", "Valencia");
let mail3 = new Mail ("personal", "jose@hotmail.com");
let ph3 = new Phone ("fijo", 962334455);

// ---------------- MAIN REGISTER -------------------

console.log("Main Register: ");

let Raquel = new Person ("Raquel", "Moya Simó", 32, "76112233-L", "01/02/1993", "azul", "mujer", [dir1], [mail1], [ph1], "nota1");
    console.log(Raquel);
    
let Javier = new Person ("Javier", "Sarabia Perez", 28, "25223344-K", "02/03/1992", "amarillo", "hombre", [dir2], [mail2], [ph2], "nota2");
    console.log(Javier);

let Jose = new Person ("Jose", "Lopez Rodríguez", 31, "71334455-J", "03/03/1991", "negro", "hombre", [dir3], [mail3], [ph3], "nota3");
    console.log(Jose);

// Modificar un registro 

let dirMod1 = new Direction ("Calle Principal", 3, 5, "A", 46020, "Valencia", "Valencia");
let mailMod1 = new Mail ("trabajo", "raquel@lateua.com");
let phMod1 = new Phone ("móvil", 662112233);

Raquel.setDirections([dirMod1])
Raquel.setMails([mailMod1]) 
Raquel.setPhones([phMod1])  

// Búsqueda de usuario por DNI + Modificación del registro  

if (Raquel.getDni() == "76112233-L")
{   
    console.log("El DNI buscado es: " + Raquel.getDni() + " y pertenece a " + Raquel.getName());
    console.log("Modificación del registro de " + Raquel.getName() + ":");
    console.log(Raquel);
}
else
{
    console.log("El DNI instroducido no se ha encontrado");
}

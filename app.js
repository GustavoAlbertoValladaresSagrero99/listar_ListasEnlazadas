class Persona
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.siguiente = null;
    }

    getNombre()
    {
        return this.nombre;
    }

    getEdad()
    {
        return this.edad;
    }
}

class Grupo
{
    constructor()
    {
        this.inicio = null;
    }

    agregar(nuevo){
        if (this.inicio==null){
            this.inicio=nuevo;
        } else {
            let aux=this.inicio;
            while(aux.siguiente!=null)
                aux=aux.siguiente;
            aux.siguiente=nuevo;
        }
    }

    listar()
    {
        let actual = this.inicio;
        let resultado = '';
        while(actual != null)
        {
            resultado += `${actual.getNombre()} ${actual.getEdad()} años -> el siguiente es: `;
            actual = actual.siguiente;
        }

        resultado += null;
        return resultado;
    }
}


let persona1 = new Persona("Alberto",21);
let persona2 = new Persona("Gustavo",21);
let persona3 = new Persona("Dioseline",19);
let persona4 = new Persona("Ivanna",20);
let persona5 = new Persona("Maria",22);


// Grupo
let g3h = new Grupo();
console.log(g3h);
//Agregando al grupo
g3h.agregar(persona1);
g3h.agregar(persona2);
g3h.agregar(persona3);
g3h.agregar(persona4);
g3h.agregar(persona5);

//Listar
console.log(g3h.listar());

let persona6 = new Persona("Arturo",21);
let persona7 = new Persona("Martha",55);
g3h.agregar(persona6);
g3h.agregar(persona7);
console.log(g3h.listar());
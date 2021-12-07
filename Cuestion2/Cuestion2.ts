class Animal{
    //Propiedades
    private _nombreAnimal: string;
    private _numeroPatas: number;
    private _carnivoro: boolean;
    private _edad: number;

    //constructor
    constructor(nombreAnimal:string, numeroPatas:number, carnivoro:boolean, edad:number){
        this._nombreAnimal = nombreAnimal;
        this._numeroPatas = numeroPatas;
        this._carnivoro = carnivoro;
        this._edad = edad;
    }

    //getters y setters
    public get nombreAnimal(): string {
        return this._nombreAnimal;
    }
    public set nombreAnimal(value: string) {
        this._nombreAnimal = value;
    }
    
    public get numeroPatas(): number {
        return this._numeroPatas;
    }
    public set numeroPatas(value: number) {
        this._numeroPatas = value;
    }
    
    public get carnivoro(): boolean {
        return this._carnivoro;
    }
    public set carnivoro(value: boolean) {
        this._carnivoro = value;
    }
    
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    public toString = () : string => {
        return `Animal (nombreAnimal: ${this.nombreAnimal}, numeroPatas: ${this.numeroPatas}, carnivoro: ${this.carnivoro}, edad: ${this.edad})`;
    }
}

const caballo = new Animal("Caballo", 4, false, 5);
const lobo = new Animal("Perro", 4, true, 7);
const araña = new Animal("Araña", 8, true, 1);

let listaAnimales:Animal[] = [caballo,lobo,araña];

let textarea = document.getElementById("txtArea");

var animales:string = "";
for (let iterator of listaAnimales) {
    animales += iterator.toString() + "\n";
}

textarea!.innerHTML = animales;


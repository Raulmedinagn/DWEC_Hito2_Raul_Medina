var Animal = /** @class */ (function () {
    //constructor
    function Animal(nombreAnimal, numeroPatas, carnivoro, edad) {
        var _this = this;
        this.toString = function () {
            return "Animal (nombreAnimal: ".concat(_this.nombreAnimal, ", numeroPatas: ").concat(_this.numeroPatas, ", carnivoro: ").concat(_this.carnivoro, ", edad: ").concat(_this.edad, ")");
        };
        this._nombreAnimal = nombreAnimal;
        this._numeroPatas = numeroPatas;
        this._carnivoro = carnivoro;
        this._edad = edad;
    }
    Object.defineProperty(Animal.prototype, "nombreAnimal", {
        //getters y setters
        get: function () {
            return this._nombreAnimal;
        },
        set: function (value) {
            this._nombreAnimal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "numeroPatas", {
        get: function () {
            return this._numeroPatas;
        },
        set: function (value) {
            this._numeroPatas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "carnivoro", {
        get: function () {
            return this._carnivoro;
        },
        set: function (value) {
            this._carnivoro = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var caballo = new Animal("Caballo", 4, false, 5);
var lobo = new Animal("Perro", 4, true, 7);
var araña = new Animal("Araña", 8, true, 1);
var listaAnimales = [caballo, lobo, araña];
var textarea = document.getElementById("txtArea");
var animales = "";
for (var _i = 0, listaAnimales_1 = listaAnimales; _i < listaAnimales_1.length; _i++) {
    var iterator = listaAnimales_1[_i];
    animales += iterator.toString() + "\n";
}
textarea.innerHTML = animales;

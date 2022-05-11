var persona = /** @class */ (function () {
    function persona(anionacimiento, nombre) {
        this.nacimiento = anionacimiento;
        this.nombre = nombre;
    }
    ;
    persona.prototype.cualestunombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    persona.prototype.cualestuedad = function () {
        var resta = 2022 - this.nacimiento;
        return "mi edad es " + resta + " años";
    };
    ;
    persona.prototype.cualestugeneracion = function () {
        if (this.nacimiento < 1975) {
            return "soy un baby boomer";
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "soy millenial";
        }
        if (this.nacimiento > 1999 && this.nacimiento < 2010) {
            return "soy centenial";
        }
        if (this.nacimiento >= 2010) {
            return "soy un alfa ";
        }
    };
    return persona;
}());
;
var fede = new persona(2001, "Angie apellido ");
console.log(fede.cualestunombre());
console.log(fede.cualestugeneracion());
console.log(fede.cualestuedad());

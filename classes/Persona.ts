export class persona {
    private  nacimiento: number;
    private nombre: string;
    
    constructor (anionacimiento :number , nombre: string ){
        this.nacimiento=anionacimiento;
        this.nombre=nombre;

    };
    public cualestunombre(): string{
        return "Mi nombre es "+ this.nombre.split(" ");
    };
    public cualestuedad(): string{
        let resta=2022-this.nacimiento;
        return "mi edad es "+resta+" años";
    };
    public cualestugeneracion() {
        if (this.nacimiento <1975) {
            return "soy un baby boomer";
        }
        if (this.nacimiento >=1975 && this.nacimiento < 1999){
            return "soy millenial";
        }
         if (this.nacimiento >1999 && this.nacimiento <2010){
            return "soy centenial";
        }
        if (this.nacimiento >=2010){
            return "soy un alfa ";
        }
    }
};




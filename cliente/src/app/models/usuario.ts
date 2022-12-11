export class usuario {
    _id?: number;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    edad: string;

    constructor(primerNombre: string, segundoNombre: string, primerApellido: string, segundoApellido: string, correo: string, edad: string) {
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.correo = correo;
        this.edad = edad;
    }
}
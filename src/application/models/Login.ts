export class Login {
    matricula : Number;
    senha: String;

    constructor(values : any = {}){
        Object.assign(this, values);
    }
}
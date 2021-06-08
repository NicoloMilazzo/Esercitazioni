export class Persona{
    private _id : number;
    private _nome: string;
    private _cognome: string;
    private _telefono: string;
    private _indirizzo: string;

constructor(id: number, nome: string, cognome: string, telefono: string, indirizzo: string){
    this._id = id;
    this._nome= nome;
    this._cognome= cognome;
    this._telefono= telefono;
    this._indirizzo= indirizzo;
}
public get id():number{
    return this._id;
}
 
public set id(id: number){
    this._id= id;
}

public get nome(): string{
return this._nome;
}

public set nome(nome: string){
    this._nome= this.nome;
}

public get cognome(): string{
    return this._cognome;
}

public set cognome(cognome: string){
    this._cognome = cognome
}

public get telefono(): string{
    return this._telefono;
}

public set telefono(telefono: string){
    this._telefono= telefono;
}

public get indirizzo(): string{
    return this._indirizzo;
}

public set indirizzo(indirizzo: string){
    this._indirizzo= indirizzo;
}

}

import { Persona } from "../model/persona";

export class personaConverter{
    daModelADto(p: Persona):any{
        return{"id":p.id, "name":p.nome, "cognome":p.cognome, "telefono":p.telefono, "adress":p.indirizzo, "email":p.email}
    }

    daDtoAModel(dto: any):Persona{
        let newPersona= new Persona(dto.id, dto.name, dto.cognome, dto.telefono, dto.adress, dto.email);
        return newPersona;
    }
}
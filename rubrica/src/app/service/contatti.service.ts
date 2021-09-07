import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONE } from '../mock-contatti';
import { Persona } from '../model/persona';
import { map } from 'rxjs/operators'
import { personaConverter } from '../converter/personaConverter';

@Injectable({
  providedIn: 'root',
})
export class ContattiService {
  cont = 3;
  personaConverter = new personaConverter();
  

  add(persona: Persona): Observable<Persona[]> {  
    PERSONE.push(persona);
    return of(PERSONE);
  }

  constructor(private httpClient: HttpClient) {}

  mostraPersone(): Observable<Persona[]> {
    return this.httpClient.get<any>("http://localhost:3000/persone").pipe(map((rispostaBE:Array<any>) => {
      let personList: Persona[]=[];
      rispostaBE.forEach(element => {
        personList.push(this.personaConverter.daDtoAModel(element))
    });
      console.log(personList);
      return personList;

    }))
  }

  delete(id: number): Observable<Persona[]> {
    PERSONE.forEach((element, index) => {
      if (element.id === id) {
        PERSONE.splice(index, 1);
        this.cont--;
      }
    });

    return of(PERSONE);
  }

  getPersona(id: number): Observable<Persona> {
    const pers = PERSONE.find((element) => element.id === id)!;

    return of(pers);
  }

  addHTTP(persona : Persona){
    let personaDTO = this.personaConverter.daModelADto(persona);
    return this.httpClient.post<any>("http://localhost:3000/persone", personaDTO);
  }

}

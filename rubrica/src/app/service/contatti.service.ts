import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONE } from '../mock-contatti';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class ContattiService {
  cont = 3;

  add(persona: Persona): Observable<Persona[]> {
    let personanew = new Persona(
      this.cont++,
      persona.nome,
      persona.cognome,
      persona.telefono,
      persona.indirizzo,
      persona.email
    );
    PERSONE.push(personanew);
    return of(PERSONE);
  }

  constructor() {}

  mostraPersone(): Observable<Persona[]> {
    return of(PERSONE);
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
}

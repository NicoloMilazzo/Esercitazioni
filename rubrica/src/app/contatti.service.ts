import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONE } from './mock-contatti';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  constructor() { }

  mostraPersone(): Observable<Persona[]>{
   
    return of(PERSONE);
  }

  delete(id: number): Observable<Persona[]>{
    let cont = 0;
    PERSONE.forEach((element)=>{
      if(element.id === id){
        PERSONE.splice(cont, 1);
      }
      cont++;
    })

    return of(PERSONE);
  }

}

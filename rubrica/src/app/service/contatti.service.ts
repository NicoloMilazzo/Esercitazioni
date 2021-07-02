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
    
    PERSONE.forEach((element, index)=>{
      if(element.id === id){
        PERSONE.splice(index, 1);
      }
     
    })

    return of(PERSONE);
  }

  getPersona(id: number): Observable<Persona>{
    const pers = PERSONE.find(element => element.id === id)!;

    return of(pers);
  }

 

}

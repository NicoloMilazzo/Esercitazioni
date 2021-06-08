import { Component, OnInit } from '@angular/core';
import { ContattiService } from '../contatti.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persone: Persona[] = [];

  constructor(private contattiservice: ContattiService) { }


  delete(id: number){
   this.contattiservice.delete(id);
    
  }

  ngOnInit(): void {
    this.contattiservice.mostraPersone().subscribe((dati)=>{this.persone=dati});
  }

}

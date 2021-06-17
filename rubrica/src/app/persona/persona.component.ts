import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContattiService } from '../contatti.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persone: Persona[] = [];
  persona: Persona | undefined;

  constructor(private contattiservice: ContattiService, private router: Router) { }


  delete(id: number){
   this.contattiservice.delete(id);
    
  }

  modifica(id: number){
    this.router.navigateByUrl('/informazioni/'+id);
  }

  getemail(id: number){
    this.contattiservice.getemail(id).subscribe(pers => this.persona = pers);
  }

  ngOnInit(): void {
    this.contattiservice.mostraPersone().subscribe((dati)=>{this.persone=dati});
  }

}

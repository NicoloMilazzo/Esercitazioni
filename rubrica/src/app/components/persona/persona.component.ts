import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContattiService } from '../../service/contatti.service';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  persone: Persona[] = [];
  persona: Persona;
  form: FormGroup;

  constructor(
    private contattiservice: ContattiService,
    private router: Router,
    private fb : FormBuilder,
  ) {}

  ngOnInit(): void {
    this.contattiservice.mostraPersone().subscribe((dati) => {
      this.persone = dati;
    });
    this.form = this.fb.group({
      nome: [undefined, Validators.required],
      cognome: [undefined, Validators.required],
      telefono: [undefined, Validators.required],
      indirizzo: [undefined, Validators.required],
      email: [undefined]

    })
  }

  delete(id: number) {
    this.contattiservice.delete(id);
  }

  modifica(id: number) {
    this.router.navigateByUrl('/informazioni/' + id);
  }

  getemail(persona: Persona) {
    this.persona = persona;
  }

  onSubmit(){
    let personaForm = this.form.getRawValue();
    this.contattiservice.add(personaForm);
  }

}

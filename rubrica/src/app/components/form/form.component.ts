import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { ContattiService } from 'src/app/service/contatti.service';
import { customValidators } from 'src/app/validators/customValidators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  persona: Persona;
  
  cont = 3;
  

  constructor(
    private contattiservice: ContattiService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [undefined, [Validators.required, customValidators.nameValidator]],
      cognome: [undefined, Validators.required],
      telefono: [undefined, Validators.required],
      indirizzo: [undefined, Validators.required],
      email: [undefined]

    })
  }

  onSubmit(){
    let personaForm = this.form.getRawValue();
    let personanew = new Persona(
      this.cont++,
      personaForm.nome,
      personaForm.cognome,
      personaForm.telefono,
      personaForm.indirizzo,
      personaForm.email,
    )
    this.contattiservice.addHTTP(personanew);
  }

}

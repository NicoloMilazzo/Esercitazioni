import { Component, OnInit } from '@angular/core';
import { ContattiService } from '../../service/contatti.service';
import { Persona } from '../../model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.component.html',
  styleUrls: ['./informazioni.component.css']
})
export class InformazioniComponent implements OnInit {

 persona: Persona | undefined;
 routeSubscription!: Subscription;
  

  constructor(
    private contattiservice: ContattiService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  
  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(): void{    
    this.routeSubscription = this.route.params.subscribe((param)=>{
      let id = +param['id'];
      this.contattiservice.getPersona(id).subscribe(pers => this.persona = pers);
    })
    
  }

  goback(){
    this.router.navigateByUrl('/persona')
  }

}

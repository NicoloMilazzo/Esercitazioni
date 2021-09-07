import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {

  @Input() titolo : string;

  constructor() { }

  ngOnInit(): void {
  }

  prova(){
    console.log(this.titolo)
  }

}

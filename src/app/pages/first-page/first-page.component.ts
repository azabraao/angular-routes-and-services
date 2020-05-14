import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  integrantes: any[] = [
    {
      nome: "Abraão Azevedo",
      RM: 83983
    },

    {
      nome: "Geovanne Amorim",
      RM: 82578
    },
    {
      nome: "Iago Garcia",
      RM: 82448
    },
    {
      nome: "Luis Guilherme",
      RM: 80389
    },
    {
      nome: "Nicolas Nunes",
      RM: 82331
    },
    {
      nome: "Rodrigo Tanaka",
      RM: 83888
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  total:number;

  elements: any = [
    {id: 5920276, first: 'Edgar', last: 'Zubieta', handle: 'Administrador',serv:'crossfit',inicio:'10/12/20',fin:'10/01/21',pay:'200'},
    {id: 3007617, first: 'Mike', last: 'Navia', handle: 'Administrador',serv:'calistenia',inicio:'10/12/20',fin:'10/01/21',pay:300},
    {id: 5920277, first: 'Sergio', last: 'Canelas', handle: 'Entrenador',serv:'muai thai',inicio:'10/12/20',fin:'10/01/21',pay:150},
  ];

  headElements = ['CI', 'Nombre', 'Apellido', 'Servicio','Inicio','Fin', 'pago'];
  constructor() { }

  ngOnInit(): void {
    this.total = this.elements.reduce((
      acc,
      obj,
    ) => acc + obj.pay,
    0);
    console.log("Total: ", this.total)
  }

}

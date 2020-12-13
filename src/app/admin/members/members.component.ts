import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  elements: any = [
    {id: 5920276, first: 'Edgar', last: 'Zubieta', handle: 'Administrador',serv:'crossfit',inicio:'10/12/20',fin:'10/01/21'},
    {id: 3007617, first: 'Mike', last: 'Navia', handle: 'Administrador',serv:'calistenia',inicio:'10/12/20',fin:'10/01/21'},
    {id: 5920277, first: 'Sergio', last: 'Canelas', handle: 'Entrenador',serv:'muai thai',inicio:'10/12/20',fin:'10/01/21'},
  ];

  headElements = ['CI', 'Nombre', 'Apellido', 'Servicio','Inicio','Fin', 'Acciones'];
  constructor() { }

  ngOnInit(): void {
  }

}

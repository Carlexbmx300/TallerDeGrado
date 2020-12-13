import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  elements: any = [
    {id: 1, first: 'Edgar', last: 'Zubieta', handle: 'Administrador'},
    {id: 2, first: 'Mike', last: 'Navia', handle: 'Administrador'},
    {id: 3, first: 'Sergio', last: 'Canelas', handle: 'Entrenador'},
  ];

  headElements = ['Nro', 'Nombre', 'Apellido', 'Rol', 'Acciones'];


  constructor() { }

  ngOnInit(): void {
  }

}

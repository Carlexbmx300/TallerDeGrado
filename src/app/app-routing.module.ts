import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { MembersComponent } from './admin/members/members.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { ServiciosComponent } from './admin/servicios/servicios.component';
import { UsersComponent } from './admin/users/users.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [


  {
    path:'',component:PrincipalComponent
  }
  ,
  {
    path:'admin',component:AdminComponent, children:
    [
      {
        path:'inicio', component:HomeComponent
      },
      {
        path:'servicios', component:ServiciosComponent
      },
      {
        path:'miembros', component:MembersComponent
      },
      {
        path:'usuarios', component:UsersComponent
      },
      {
        path:'reportes', component:ReportesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

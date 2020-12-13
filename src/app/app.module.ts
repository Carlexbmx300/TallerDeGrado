import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { ServiciosComponent } from './admin/servicios/servicios.component';
import { MembersComponent } from './admin/members/members.component';
import { UsersComponent } from './admin/users/users.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    MembersComponent,
    UsersComponent,
    ReportesComponent,
    PrincipalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

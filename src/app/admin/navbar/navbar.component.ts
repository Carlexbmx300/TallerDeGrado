import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
hide:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
sideMenu(){
if(this.hide==false)
{
  this.hide = true;
}else{
  this.hide = false;
}

console.log(this.hide);
}
}

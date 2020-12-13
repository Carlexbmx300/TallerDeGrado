import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos de relevancia' }
  ];

  public chartLabels: Array<any> = ['Regulares', 'Ocasionales', 'Asistencia dia', 'Asistencia noche', 'Bajas', 'Vencidos'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartType2: string = 'pie';

  public chartDatasets2: Array<any> = [
    { data: [30, 50, 20, 40, 70], label: 'My First dataset' }
  ];

  public chartLabels2: Array<any> = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  public chartColors2: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions2: any = {
    responsive: true
  };
  constructor() { }

  ngOnInit(): void {
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

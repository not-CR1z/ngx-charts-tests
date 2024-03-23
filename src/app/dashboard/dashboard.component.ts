import { Router } from '@angular/router';
import { ChartsService } from './../services/charts.service';
import { Component } from '@angular/core';
import { error } from 'node:console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private chartsService: ChartsService, private router: Router) {
  }

  bubbleData: any[] = [
    {
      name: 'Login',
      series: [
        {
          name: 'Login-0604',
          x: '3',
          y: 80,
          r: 20,
          Activo: 60,
          Inactivo: 20,
          Hora: "8:00-8:01"
        }
      ]
    },
    {
      name: 'PagoCredito',
      series: [
        {
          name: 'PagoCredito-1324',
          x: '6',
          y: 120,
          r: 20,
          Activo: 118,
          Inactivo: 2,
          Hora: "8:00-8:01"
        }
      ]
    },
    {
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '13',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '16',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '25',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '40',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '100',
          y: 1200,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '300',
          y: 80,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    },{
      name: 'Logout',
      series: [
        {
          name: 'Logout-0297',
          x: '10',
          y: 800,
          r: 20,
          Activo: 600,
          Inactivo: 200,
          Hora: "8:00-8:01"
        }
      ]
    }
  ];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Tiempo en transacción';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Minuto';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 100;
  yScaleMax: number = 50;

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log(data.series[0].Hora);
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  view: [300, 200];
  dataInactivity: any[] = [];
  dataTransactions: any[] = [];
  resultInactivity: any[] = [];
  resultTransactions: any[] = [];
  temporalList: any[] = [];
  showTopInactivity: boolean = false;
  showTopTransactions: boolean = false;
  dateSelected: Date = new Date;
  x: any[] = [];
  y: any[] = [];
  spinner: boolean = false;

  getTopInactivity() {
    this.spinner = true
    this.showTopInactivity = true;
    this.chartsService.getTopInactivityService(this.dateSelected).subscribe(result => {
      this.x.slice(0, this.x.length);
      this.resultInactivity = result;
      this.resultInactivity.forEach(json => {
        let item = { name: json.UserId, value: json.InactivityTime };
        this.x.push(item);
      });
      this.dataInactivity = [...this.x]
      this.spinner = false
    })
  }

  getTopTransactions() {
    this.spinner = true
    this.showTopTransactions = true;
    this.chartsService.getTopTransactions(this.dateSelected).subscribe(result => {
      this.y.slice(0, this.y.length);
      this.resultTransactions = result;
      this.resultTransactions.forEach(json => {
        let item = { name: json.UserId, value: json.NumTransactions };
        this.y.push(item);
      });
      this.dataTransactions = [...this.y]
      this.spinner = false
    })
  }
}

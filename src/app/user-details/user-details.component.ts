import { ActivatedRoute } from '@angular/router';
import { ChartsService } from './../services/charts.service';
import { Component, OnInit } from '@angular/core';
import { Session } from '../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  constructor(private chartsService: ChartsService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    let id;
    this.route.params.subscribe(p => {
      let dateRoute: string = p['date'];
      id = p['id'];
      this.userIdentifier = id;
      let dateSelected: string = dateRoute.substring(0, 10)
      let x = { "UserId": id, "Fecha": dateSelected }
      this.chartsService.getInfoUser(x).subscribe(data => this.sessionList = data);
    }
    )
  }
  userIdentifier: string = "";
  //Pie Inactividad
  valuesInactivityPie = [
    { "name": "Active seconds", "value": 0 },
    { "name": "Inactive seconds", "value": 0 }
  ];

  //Chart duración por cada evento
  valuesTimeEventChart = [
    { "name": "Minimized", "value": 0 },
    { "name": "Unfocused", "value": 0 },
    { "name": "ClickOut", "value": 0 }
  ];

  //Actividad/Hora 8-16
  valuesResumeActivityDay = [
    { "hour": "8", "name": "8..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "9", "name": "9..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "10", "name": "10..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "11", "name": "11..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "12", "name": "12..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "13", "name": "13..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "14", "name": "14..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "15", "name": "15..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "16", "name": "16..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
    { "hour": "17", "name": "17..", "series": [{ "name": "Tiempo activo", "value": 0 }, { "name": "Tiempo inactivo", "value": 0 }] },
  ];

  registerTransactions: any[] = [];
  sessionList: Session[];
  activityTimeData: any = [];
  registerHours: any;

  showChartsSession(session: number) {
    this.valuesInactivityPie.forEach(v => {
      v.value = 0;
    });
    this.valuesResumeActivityDay.forEach(v => {
      v.series[0].value = 0;
      v.series[1].value = 0;
    });
    this.valuesTimeEventChart.forEach(v => {
      v.value = 0;
    });
    this.registerTransactions.splice(0, this.registerTransactions.length);
    //Duración por evento
    this.valuesInactivityPie[0].value = 0;
    this.valuesInactivityPie[1].value = 0;
    const newActivityData = [...this.valuesInactivityPie];
    const newTimeEvent = [...this.valuesTimeEventChart]
    for (let i = 0; i < this.sessionList[session].Events.length; i++) {
      if (this.sessionList[session].Events[i].EventCode == 0) {
        newTimeEvent[0].value += this.sessionList[session].Events[i].EventDuration;
      }
      if (this.sessionList[session].Events[i].EventCode == 1) {
        newTimeEvent[1].value += this.sessionList[session].Events[i].EventDuration;
      }
      if (this.sessionList[session].Events[i].EventCode == 2) {
        newTimeEvent[2].value += this.sessionList[session].Events[i].EventDuration;
      }
      //Valor inactividad Pie
      newActivityData[1].value += this.sessionList[session].Events[i].EventDuration;
    }
    //Valor actividad Pie
    newActivityData[0].value = this.sessionList[session].Duration - newActivityData[1].value;
    this.activityTimeData = [...newActivityData];
    this.valuesTimeEventChart = [...newTimeEvent];

    //Resumen por hora
    this.sessionList.forEach(s => {
      for (let i = 0; i < s.Events.length; i++) {
        const resumeHours = new Date(s.Events[i].EventStart)
        let hourEvent = resumeHours.getHours().toString();
        for (let hour = 0; hour < this.valuesResumeActivityDay.length; hour++) {
          if (hourEvent == this.valuesResumeActivityDay[hour].hour) {
            this.valuesResumeActivityDay[hour].series[0].value = 60;
            this.valuesResumeActivityDay[hour].series[1].value += s.Events[i].EventDuration / 60;
            this.valuesResumeActivityDay[hour].series[0].value -= this.valuesResumeActivityDay[hour].series[1].value;
          }
        }
      }
    })
    const newRegisterHours = this.valuesResumeActivityDay;
    this.registerHours = [...newRegisterHours];

    //Conteo de transacciones
    const newTransactionCounter = [...this.registerTransactions]
    this.sessionList[session].Events.forEach(t => {
      const existingTransaction = newTransactionCounter.find(
        transaction => transaction.name === t.ServiceName
      );

      if (existingTransaction) {
        existingTransaction.value += 1;
      } else {
        const newTransaction = {
          name: t.ServiceName,
          value: 1
        };
        newTransactionCounter.push(newTransaction);
      }
    })
    this.registerTransactions = [...newTransactionCounter];
    ;
  }
}
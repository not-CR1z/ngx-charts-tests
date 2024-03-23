import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inactivity-hours-bar',
  templateUrl: './inactivity-hours-bar.component.html',
  styleUrls: ['./inactivity-hours-bar.component.css']
})
export class InactivityHoursBarComponent implements OnChanges{
  @Input() item:any = [];
  valuesResumeActivityDay: any[];
  view:[number, number] = [550, 400];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Hora';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Minutos';
  animations: boolean = true;

  constructor() {
  }
  ngOnChanges(): void {
    this.valuesResumeActivityDay = this.item;
  }
  onSelect(event) {
    console.log(event);
  }
}

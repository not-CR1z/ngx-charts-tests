import { Component, Input, OnChanges,  } from '@angular/core';

@Component({
  selector: 'app-time-event-bar',
  templateUrl: './time-event-bar.component.html',
  styleUrls: ['./time-event-bar.component.css']
})
export class TimeEventBarComponent implements OnChanges {
  @Input() item: any;

  valuesTimeEventChart: any[];
  view: [number, number] = [550, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Evento';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Minutos transcurridos';

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnChanges(): void {
    this.valuesTimeEventChart = this.item;
  }
}

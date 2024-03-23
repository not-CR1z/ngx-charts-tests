import { Component, Input, OnChanges } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-inactivity-session-pie',
  templateUrl: './inactivity-session-pie.component.html',
  styleUrls: ['./inactivity-session-pie.component.css']
})
export class InactivitySessionPieComponent implements OnChanges{
  @Input() item: any = [];
  valuesInactivityPie: any[] = this.item;
  view: [number, number] = [550, 320];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition = LegendPosition.Below;

  constructor() {
  }
  ngOnChanges(): void {
    this.valuesInactivityPie = this.item;
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

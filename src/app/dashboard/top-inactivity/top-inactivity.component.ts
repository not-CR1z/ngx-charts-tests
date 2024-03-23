import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-inactivity',
  templateUrl: './top-inactivity.component.html',
  styleUrl: './top-inactivity.component.css'
})
export class TopInactivityComponent implements OnChanges{
  @Input() item: any[];
  @Input() date: any;

  //settings
  view: [300, 300];
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Usuarios';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Minutos transcurridos';
  cardColor: string = '#232837';

  showTopInactivity: boolean = false;
  showTopTransactions: boolean = false;
  dateSelected: Date = new Date;
  data: any;

  onDeactivate($event: any) {
    throw new Error('Method not implemented.');
  }
  onActivate($event: any) {
    throw new Error('Method not implemented.');
  }
  onSelect(data): void {
    let dateQuery: string = this.dateSelected.toISOString();
    console.log(data);
    window.open('/user-details/' + dateQuery + '/' + data.name, '_blank');
  }

  ngOnChanges(): void {
    this.data = this.item;
    this.dateSelected = this.date;
  }
}

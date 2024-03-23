import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-transactions',
  templateUrl: './top-transactions.component.html',
  styleUrl: './top-transactions.component.css'
})
export default class TopTransactionsComponent  {
 @Input() item :any;
 @Input() date :any;

 //Charts settings
 view: [300, 300];
 showXAxis: boolean = false;
 showYAxis: boolean = true;
 gradient: boolean = true;
 showXAxisLabel: boolean = true;
 yAxisLabel: string = 'Evento';
 showYAxisLabel: boolean = true;
 xAxisLabel: string = 'Minutos transcurridos';
 cardColor: string = '#232837';
 dateSelected: Date;



 data : any[] = [];
 onSelect(data): void {
  let dateQuery: string = this.dateSelected.toISOString();
    console.log(data);
    window.open('/user-details/' + dateQuery + '/' + data.name, '_blank');
}
onActivate(data): void {
}
onDeactivate(data): void {
}
ngOnChanges(): void {
  this.data = this.item;
  this.dateSelected = this.date;
}
}

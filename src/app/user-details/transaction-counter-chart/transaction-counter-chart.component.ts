import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-counter-chart',
  templateUrl: './transaction-counter-chart.component.html',
  styleUrls: ['./transaction-counter-chart.component.css']
})
export class TransactionCounterChartComponent implements OnChanges {
  @Input() item: any = [];
  transactionsDayRegister: any[];
  view: [number, number] = [550, 400];
  cardColor: string = '#232837';

  ngOnChanges(): void {
    this.transactionsDayRegister = this.item;
  }
  onSelect(event) {
    console.log(event);
  }
}

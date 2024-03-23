import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCounterChartComponent } from './transaction-counter-chart.component';

describe('TransactionCounterChartComponent', () => {
  let component: TransactionCounterChartComponent;
  let fixture: ComponentFixture<TransactionCounterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionCounterChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionCounterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

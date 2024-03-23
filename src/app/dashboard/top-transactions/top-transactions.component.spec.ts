import { ComponentFixture, TestBed } from '@angular/core/testing';

import TopTransactionsComponent from './top-transactions.component';

describe('TopTransactionsComponent', () => {
  let component: TopTransactionsComponent;
  let fixture: ComponentFixture<TopTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopTransactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

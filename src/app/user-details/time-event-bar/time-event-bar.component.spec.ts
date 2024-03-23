import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEventBarComponent } from './time-event-bar.component';

describe('TimeEventBarComponent', () => {
  let component: TimeEventBarComponent;
  let fixture: ComponentFixture<TimeEventBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeEventBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeEventBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivityHoursBarComponent } from './inactivity-hours-bar.component';

describe('InactivityHoursBarComponent', () => {
  let component: InactivityHoursBarComponent;
  let fixture: ComponentFixture<InactivityHoursBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InactivityHoursBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactivityHoursBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

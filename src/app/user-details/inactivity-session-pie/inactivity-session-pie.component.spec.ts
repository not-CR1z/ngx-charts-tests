import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivitySessionPieComponent } from './inactivity-session-pie.component';

describe('InactivitySessionPieComponent', () => {
  let component: InactivitySessionPieComponent;
  let fixture: ComponentFixture<InactivitySessionPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InactivitySessionPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactivitySessionPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

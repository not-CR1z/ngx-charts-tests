import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInactivityComponent } from './top-inactivity.component';

describe('TopInactivityComponent', () => {
  let component: TopInactivityComponent;
  let fixture: ComponentFixture<TopInactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopInactivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopInactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

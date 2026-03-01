import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightScheduleComponent } from './view-flight-schedule.component';

describe('ViewFlightScheduleComponent', () => {
  let component: ViewFlightScheduleComponent;
  let fixture: ComponentFixture<ViewFlightScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewFlightScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFlightScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

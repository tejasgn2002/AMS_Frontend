import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarrierComponent } from './view-carrier.component';

describe('ViewCarrierComponent', () => {
  let component: ViewCarrierComponent;
  let fixture: ComponentFixture<ViewCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCarrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

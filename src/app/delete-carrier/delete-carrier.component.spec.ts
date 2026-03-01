import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarrierComponent } from './delete-carrier.component';

describe('DeleteCarrierComponent', () => {
  let component: DeleteCarrierComponent;
  let fixture: ComponentFixture<DeleteCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCarrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

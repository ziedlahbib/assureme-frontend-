import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeManagmentComponent } from './vehicule-managment.component';

describe('VehiculeManagmentComponent', () => {
  let component: VehiculeManagmentComponent;
  let fixture: ComponentFixture<VehiculeManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

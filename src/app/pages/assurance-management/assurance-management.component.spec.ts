import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceManagementComponent } from './assurance-management.component';

describe('AssuranceManagementComponent', () => {
  let component: AssuranceManagementComponent;
  let fixture: ComponentFixture<AssuranceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuranceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuranceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

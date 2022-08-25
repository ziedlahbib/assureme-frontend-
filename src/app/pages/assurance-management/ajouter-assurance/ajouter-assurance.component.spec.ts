import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAssuranceComponent } from './ajouter-assurance.component';

describe('AjouterAssuranceComponent', () => {
  let component: AjouterAssuranceComponent;
  let fixture: ComponentFixture<AjouterAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

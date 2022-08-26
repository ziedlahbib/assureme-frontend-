import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherchermeilleurassuranceComponent } from './cherchermeilleurassurance.component';

describe('CherchermeilleurassuranceComponent', () => {
  let component: CherchermeilleurassuranceComponent;
  let fixture: ComponentFixture<CherchermeilleurassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherchermeilleurassuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CherchermeilleurassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

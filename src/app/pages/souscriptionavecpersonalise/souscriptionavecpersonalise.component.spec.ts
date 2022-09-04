import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscriptionavecpersonaliseComponent } from './souscriptionavecpersonalise.component';

describe('SouscriptionavecpersonaliseComponent', () => {
  let component: SouscriptionavecpersonaliseComponent;
  let fixture: ComponentFixture<SouscriptionavecpersonaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouscriptionavecpersonaliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscriptionavecpersonaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleurpackComponent } from './meilleurpack.component';

describe('MeilleurpackComponent', () => {
  let component: MeilleurpackComponent;
  let fixture: ComponentFixture<MeilleurpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleurpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleurpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

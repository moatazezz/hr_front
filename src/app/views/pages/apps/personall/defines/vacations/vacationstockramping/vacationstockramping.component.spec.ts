import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationstockrampingComponent } from './vacationstockramping.component';

describe('VacationstockrampingComponent', () => {
  let component: VacationstockrampingComponent;
  let fixture: ComponentFixture<VacationstockrampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationstockrampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationstockrampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

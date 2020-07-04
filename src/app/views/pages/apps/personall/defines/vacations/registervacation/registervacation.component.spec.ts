import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervacationComponent } from './registervacation.component';

describe('RegistervacationComponent', () => {
  let component: RegistervacationComponent;
  let fixture: ComponentFixture<RegistervacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistervacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistervacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

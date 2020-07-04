import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrcollectivevacationComponent } from './registerrcollectivevacation.component';

describe('RegisterrcollectivevacationComponent', () => {
  let component: RegisterrcollectivevacationComponent;
  let fixture: ComponentFixture<RegisterrcollectivevacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterrcollectivevacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterrcollectivevacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

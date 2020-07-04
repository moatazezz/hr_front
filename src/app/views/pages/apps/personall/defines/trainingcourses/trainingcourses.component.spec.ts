import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingcoursesComponent } from './trainingcourses.component';

describe('TrainingcoursesComponent', () => {
  let component: TrainingcoursesComponent;
  let fixture: ComponentFixture<TrainingcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

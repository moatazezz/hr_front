import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewordervacationComponent } from './reviewordervacation.component';

describe('ReviewordervacationComponent', () => {
  let component: ReviewordervacationComponent;
  let fixture: ComponentFixture<ReviewordervacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewordervacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewordervacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

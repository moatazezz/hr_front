import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonallComponent } from './personall.component';

describe('PersonallComponent', () => {
  let component: PersonallComponent;
  let fixture: ComponentFixture<PersonallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

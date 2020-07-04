import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalOrganizationComponent } from './educational-organization.component';

describe('EducationalOrganizationComponent', () => {
  let component: EducationalOrganizationComponent;
  let fixture: ComponentFixture<EducationalOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

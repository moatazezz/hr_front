import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcountriesComponent } from './getallcountries.component';

describe('GetallcountriesComponent', () => {
  let component: GetallcountriesComponent;
  let fixture: ComponentFixture<GetallcountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallcountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

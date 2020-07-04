import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VactiontypeslistComponent } from './listvacationtypes.component';

describe('VacationstypeslistComponet', () => {
  let component: VactiontypeslistComponent;
  let fixture: ComponentFixture<VactiontypeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VactiontypeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VactiontypeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

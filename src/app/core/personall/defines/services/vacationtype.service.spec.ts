import { TestBed } from '@angular/core/testing';

import { VacationtypeService } from './vacationtype.service';

describe('VacationtypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacationtypeService = TestBed.get(VacationtypeService);
    expect(service).toBeTruthy();
  });
});

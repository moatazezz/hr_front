import { TestBed } from '@angular/core/testing';

import { SectortypeService } from './sectortype.service';

describe('SectortypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectortypeService = TestBed.get(SectortypeService);
    expect(service).toBeTruthy();
  });
});

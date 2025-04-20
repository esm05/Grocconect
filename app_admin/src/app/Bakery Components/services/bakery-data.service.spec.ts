import { TestBed } from '@angular/core/testing';

import { BakeryDataService } from './bakery-data.service';

describe('BakeryDataService', () => {
  let service: BakeryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakeryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

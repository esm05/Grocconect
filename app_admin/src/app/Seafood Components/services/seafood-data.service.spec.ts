import { TestBed } from '@angular/core/testing';

import { SeafoodDataService } from './seafood-data.service';

describe('SeafoodDataService', () => {
  let service: SeafoodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeafoodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

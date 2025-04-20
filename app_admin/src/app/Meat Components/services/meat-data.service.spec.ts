import { TestBed } from '@angular/core/testing';

import { MeatDataService } from './meat-data.service';

describe('MeatDataService', () => {
  let service: MeatDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeatDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

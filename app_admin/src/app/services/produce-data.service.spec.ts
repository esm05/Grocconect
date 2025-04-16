import { TestBed } from '@angular/core/testing';

import { ProduceDataService } from './produce-data.service';

describe('ProduceDataService', () => {
  let service: ProduceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

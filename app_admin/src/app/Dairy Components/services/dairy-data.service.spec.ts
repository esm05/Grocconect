import { TestBed } from '@angular/core/testing';

import { DairyDataService } from './dairy-data.service';

describe('DairyDataService', () => {
  let service: DairyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

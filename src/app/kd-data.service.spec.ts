import { TestBed } from '@angular/core/testing';

import { KDDataService } from './kd-data.service';

describe('KDDataService', () => {
  let service: KDDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KDDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

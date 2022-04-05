import { TestBed } from '@angular/core/testing';

import { PortApiService } from './port-api.service';

describe('PortApiService', () => {
  let service: PortApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

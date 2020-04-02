import { TestBed } from '@angular/core/testing';

import { RocketServiceService } from './rocket-service.service';

describe('RocketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RocketServiceService = TestBed.get(RocketServiceService);
    expect(service).toBeTruthy();
  });
});

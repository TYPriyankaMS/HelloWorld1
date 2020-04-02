import { TestBed } from '@angular/core/testing';

import { Rocket1Service } from './rocket1.service';

describe('Rocket1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Rocket1Service = TestBed.get(Rocket1Service);
    expect(service).toBeTruthy();
  });
});

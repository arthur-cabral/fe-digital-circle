import { TestBed } from '@angular/core/testing';

import { Tb01Service } from './tb01.service';

describe('Tb01Service', () => {
  let service: Tb01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tb01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

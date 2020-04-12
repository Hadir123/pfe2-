import { TestBed } from '@angular/core/testing';

import { VetRxService } from './vet-rx.service';

describe('VetRxService', () => {
  let service: VetRxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetRxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

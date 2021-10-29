import { TestBed } from '@angular/core/testing';

import { BDLocalService } from './bdlocal.service';

describe('BDLocalService', () => {
  let service: BDLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

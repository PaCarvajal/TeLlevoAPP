import { TestBed } from '@angular/core/testing';

import { BDlocalService } from './bdlocal.service';

describe('BDlocalService', () => {
  let service: BDlocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDlocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

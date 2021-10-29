import { TestBed } from '@angular/core/testing';

import { ServTellevoService } from './serv-tellevo.service';

describe('ServTellevoService', () => {
  let service: ServTellevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServTellevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

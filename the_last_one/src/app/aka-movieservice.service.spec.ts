import { TestBed } from '@angular/core/testing';

import { AkaMovieserviceService } from './aka-movieservice.service';

describe('AkaMovieserviceService', () => {
  let service: AkaMovieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkaMovieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

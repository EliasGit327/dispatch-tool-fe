import { TestBed } from '@angular/core/testing';

import { HttpUrlReqService } from './http-url-req.service';

describe('HttpUrlReqService', () => {
  let service: HttpUrlReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUrlReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

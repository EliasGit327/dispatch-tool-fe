import { TestBed } from '@angular/core/testing';

import { HttpDispatchSettingsService } from './http-dispatch-settings.service';

describe('HttpDispatchSettingsService', () => {
  let service: HttpDispatchSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDispatchSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

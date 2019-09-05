import { TestBed } from '@angular/core/testing';

import { UserServicesService } from './user-services.service';

describe('UserServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServicesService = TestBed.get(UserServicesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataServicesService } from './data-services.service';

describe('DataServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServicesService = TestBed.get(DataServicesService);
    expect(service).toBeTruthy();
  });
});

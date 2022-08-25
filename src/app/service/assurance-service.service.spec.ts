import { TestBed } from '@angular/core/testing';

import { AssuranceServiceService } from './assurance-service.service';

describe('AssuranceServiceService', () => {
  let service: AssuranceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssuranceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

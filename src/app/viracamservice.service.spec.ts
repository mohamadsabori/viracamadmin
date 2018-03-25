import { TestBed, inject } from '@angular/core/testing';

import { ViracamserviceService } from './viracamservice.service';

describe('ViracamserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViracamserviceService]
    });
  });

  it('should be created', inject([ViracamserviceService], (service: ViracamserviceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { AlumnocordService } from './alumnocord.service';

describe('AlumnocordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnocordService]
    });
  });

  it('should be created', inject([AlumnocordService], (service: AlumnocordService) => {
    expect(service).toBeTruthy();
  }));
});

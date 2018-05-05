import { TestBed, inject } from '@angular/core/testing';

import { NgNgrxIdleService } from './ng-ngrx-idle.service';

describe('NgNgrxIdleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgNgrxIdleService]
    });
  });

  it('should be created', inject([NgNgrxIdleService], (service: NgNgrxIdleService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { CfbService } from './cfb.service';

describe('CfbService', () => {
  let service: CfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

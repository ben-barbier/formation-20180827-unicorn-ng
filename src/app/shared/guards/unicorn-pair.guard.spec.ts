import { TestBed, async, inject } from '@angular/core/testing';

import { UnicornPairGuard } from './unicorn-pair.guard';

describe('UnicornPairGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnicornPairGuard]
    });
  });

  it('should ...', inject([UnicornPairGuard], (guard: UnicornPairGuard) => {
    expect(guard).toBeTruthy();
  }));
});

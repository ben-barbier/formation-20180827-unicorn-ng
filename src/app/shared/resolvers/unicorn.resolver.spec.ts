import { TestBed, async, inject } from '@angular/core/testing';

import { UnicornResolver } from './unicorn.resolver';

describe('UnicornGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnicornResolver]
    });
  });

  it('should ...', inject([UnicornResolver], (guard: UnicornResolver) => {
    expect(guard).toBeTruthy();
  }));
});

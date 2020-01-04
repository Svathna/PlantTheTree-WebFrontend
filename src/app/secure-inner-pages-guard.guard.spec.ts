import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPagesGuardGuard } from './secure-inner-pages-guard.guard';

describe('SecureInnerPagesGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureInnerPagesGuardGuard]
    });
  });

  it('should ...', inject([SecureInnerPagesGuardGuard], (guard: SecureInnerPagesGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

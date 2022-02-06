import { TestBed } from '@angular/core/testing';

import { AuthResolverGuard } from './auth-resolver.guard';

describe('AuthResolverGuard', () => {
  let guard: AuthResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

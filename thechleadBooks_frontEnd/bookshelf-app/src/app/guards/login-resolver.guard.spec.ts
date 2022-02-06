import { TestBed } from '@angular/core/testing';

import { LoginResolverGuard } from './login-resolver.guard';

describe('LoginResolverGuard', () => {
  let guard: LoginResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BookResolverGuard } from './book-resolver.guard';

describe('BookResolverGuard', () => {
  let guard: BookResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

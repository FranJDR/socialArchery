import { TestBed, async, inject } from '@angular/core/testing';

import { IsDisconnectGuard } from './is-disconnect.guard';

describe('IsDisconnectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsDisconnectGuard]
    });
  });

  it('should ...', inject([IsDisconnectGuard], (guard: IsDisconnectGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { GuardaHomeGuard } from './guarda-home.guard';

describe('GuardaHomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardaHomeGuard]
    });
  });

  it('should ...', inject([GuardaHomeGuard], (guard: GuardaHomeGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { TokkenInterceptor } from './tokken.interceptor';

describe('TokkenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokkenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokkenInterceptor = TestBed.inject(TokkenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

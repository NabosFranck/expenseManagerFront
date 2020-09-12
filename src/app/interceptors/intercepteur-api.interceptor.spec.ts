import { TestBed } from '@angular/core/testing';

import { IntercepteurApiInterceptor } from './intercepteur-api.interceptor';

describe('IntercepteurApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntercepteurApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntercepteurApiInterceptor = TestBed.inject(IntercepteurApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

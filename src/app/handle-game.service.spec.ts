import { TestBed, inject } from '@angular/core/testing';

import { HandleGameService } from './handle-game.service';

describe('HandleGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleGameService]
    });
  });

  it('should be created', inject([HandleGameService], (service: HandleGameService) => {
    expect(service).toBeTruthy();
  }));
});

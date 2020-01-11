import { TestBed } from '@angular/core/testing';

import { AppShellConfigService } from './app-shell-config.service';

describe('AppShellConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppShellConfigService = TestBed.get(AppShellConfigService);
    expect(service).toBeTruthy();
  });
});

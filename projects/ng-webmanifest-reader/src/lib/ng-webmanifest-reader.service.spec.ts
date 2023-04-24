import { TestBed } from '@angular/core/testing';

import { NgWebmanifestReaderService } from './ng-webmanifest-reader.service';

describe('NgWebmanifestReaderService', () => {
  let service: NgWebmanifestReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWebmanifestReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

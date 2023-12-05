import { TestBed } from '@angular/core/testing';

import { CrudNoteService } from './crud-note.service';

describe('CrudNoteService', () => {
  let service: CrudNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

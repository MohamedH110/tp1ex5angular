import { TestBed } from '@angular/core/testing';

import {NotesService  } from './notesservice.service';

describe('NotesserviceService', () => {
  let service: NotesService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

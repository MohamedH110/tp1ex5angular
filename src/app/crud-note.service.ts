import { Injectable } from '@angular/core';
import { NotesService } from './notesservice.service';

@Injectable({
  providedIn: 'root'
})

export class CrudNoteService {

  notes:string[]=[]
  
  constructor(private nService:NotesService) {
    this.notes=nService.getNotes()
   }
  
  }
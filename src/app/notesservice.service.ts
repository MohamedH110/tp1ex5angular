import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: string[] = [];
  note :string=""

  addNote(note: string) {
    this.notes.push(note);
  }

  getNotes(): string[] {
    return this.notes;
  }
}

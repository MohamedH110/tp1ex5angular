import { Component } from '@angular/core';
import{NotesService} from './notesservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex12';
  n:string=""
 note:string=""
  constructor(note:NotesService){

  }
    addNote() {
      this.note.addNote(this.note);
  
}



}
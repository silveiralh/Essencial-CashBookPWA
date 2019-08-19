import { Component, Input } from '@angular/core';

import { NotesService } from '../notes.service';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent {

  @Input() note: any;

  constructor(private notesService: NotesService) { }

  addHeartToNote(val: number, action: number) {
    if (this.note.id && action==1) {
      this.notesService.updateNote(this.note.id, { hearts: val + 1 });
    } else if (this.note.id && action==2 && val != 0) {
      this.notesService.updateNote(this.note.id, { hearts: val - 1 });
    } 
    else {
      console.error('Note missing ID!');
    }
  }

  deleteNote(id: string) {
    this.notesService.deleteNote(id);
  }

}

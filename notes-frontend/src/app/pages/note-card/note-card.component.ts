import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent {

  @Input() note!: Note; 
  @Input() expanded = false;
  @Output() update = new EventEmitter<Note>();
  @Output() remove = new EventEmitter<number>();
  @Output() expand = new EventEmitter<number>();
  public editTitle = '';
  public editText = '';

  constructor() { }


  editNote(){
    if (this.note.id) this.expand.emit(this.note.id);
    this.editTitle = this.note.title;
    this.editText = this.note.text;
  }

  save(e: Event) {
    if (!this.note.id) return;
    var editedNote: Note = {
      id: this.note.id,
      title: this.editTitle.trim(),
      text: this.editText.trim()
    }
    this.update.emit(editedNote);
    this.expand.emit(-1); // -1  close all cards
  }

  delete(e: Event) {
    if (this.note.id) this.remove.emit(this.note.id);
  }
  
  cancel(e: Event) {
    this.expand.emit(-1); // -1  close all cards
    this.editTitle = this.note.title;
    this.editText = this.note.text;
  }
}

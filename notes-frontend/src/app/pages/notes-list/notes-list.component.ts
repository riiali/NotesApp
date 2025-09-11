import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotesService } from '../../core/notes.service';
import { NoteCardComponent } from '../note-card/note-card.component';
import { Note } from '../../core/models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
  imports: [CommonModule, FormsModule, NoteCardComponent],
  standalone: true
})
export class NotesListComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  title = '';
  text = '';
  expandedNoteId: number | null = null;
  isAddingNote = false;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.notesService.list().subscribe(n => this.notes = n);
  }

  startAddingNote() {
    if (!this.isAddingNote) {
      this.isAddingNote = true;
      this.expandedNoteId = null; 
      this.title = '';
      this.text = '';
    }
  }

  add(e?: Event) {
    if (e) e.preventDefault();
    if (!this.title.trim()) return; //Only title is required (text can be empty)
    this.notesService.create({ title: this.title.trim(), text: this.text.trim() || '' })
      .subscribe({
      next: created => {
        this.notes = [created, ...this.notes];
        this.title = ''; 
        this.text = '';
        this.isAddingNote = false;
      },
      error: (err) => {
        console.error('Error creating note', err);
      }
      });
  }

  cancelAdd(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.isAddingNote = false;
    this.title = '';
    this.text = '';
  }

  onUpdate(note: Note) {
    this.notesService.update(note.id!, note)
      .subscribe({
      next: updated => {
        const i = this.notes.findIndex(n => n.id === updated.id);
        if (i > -1) this.notes[i] = updated;
      },
      error: (err) => {
        console.error('Error updating note', err);
      }
      });
  }

  onRemove(id: number) {
    this.notesService.delete(id).subscribe({
      next: () => {
      this.notes = this.notes.filter(n => n.id !== id);
      if (this.expandedNoteId === id) {
        this.expandedNoteId = null;
      }
      },
      error: (err) => {
      console.error('Error deleting note', err);
      }
    });
  }

  onExpand(noteId: number) {
    if (noteId === -1) {
      this.expandedNoteId = null; 
    } else {
      this.expandedNoteId = noteId; 
      this.isAddingNote = false; 
    }
  }
  ngOnDestroy(): void {
  }
}

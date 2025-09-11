import { Component } from '@angular/core';
import { NotesListComponent } from "./pages/notes-list/notes-list.component";

@Component({
  selector: 'app-root',
  imports: [NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'notes-frontend';
}

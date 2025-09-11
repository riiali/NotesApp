import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Note } from "./models/note.model";

@Injectable({ providedIn: 'root' })
export class NotesService {
  private http = inject(HttpClient);
  private readonly base = '/api/notes'; //uses proxy

  list(): Observable<Note[]> { 
    return this.http.get<Note[]>(this.base);
  }

  get(id: number): Observable<Note> { 
    return this.http.get<Note>(`${this.base}/${id}`);
  }
  create(n: Note): Observable<Note> { 
    return this.http.post<Note>(this.base, n);
  }
  update(id: number, n: Note): Observable<Note> { 
    return this.http.put<Note>(`${this.base}/${id}`, n);
  }
  delete(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
package com.example.notes.note.service;

import com.example.notes.note.dto.CreateNoteRequest;
import com.example.notes.note.dto.NoteResponse;

import java.util.List;

public interface NoteService {
    NoteResponse create(CreateNoteRequest request);
    List<NoteResponse> list();
}

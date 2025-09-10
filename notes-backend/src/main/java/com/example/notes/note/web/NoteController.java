package com.example.notes.note.web;

import com.example.notes.note.dto.CreateNoteRequest;
import com.example.notes.note.dto.NoteResponse;
import com.example.notes.note.service.NoteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin //just for dev!

public class NoteController {
    private final NoteService service;

    public NoteController(NoteService service){
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public NoteResponse create(@Valid @RequestBody CreateNoteRequest request){
        return service.create(request);
    }

    @GetMapping
    public List<NoteResponse> list(){
        return service.list();
    }
}

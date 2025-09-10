package com.example.notes.note.service;

import com.example.notes.note.domain.Note;
import com.example.notes.note.dto.CreateNoteRequest;
import com.example.notes.note.dto.NoteResponse;
import com.example.notes.note.mapper.NoteMapper;
import com.example.notes.note.repository.NoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class NoteServiceImpl implements NoteService {
    private final NoteRepository repository;
    private final NoteMapper mapper;

    public NoteServiceImpl(NoteRepository repository, NoteMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public NoteResponse create(CreateNoteRequest request) {
        Note saved = repository.save(mapper.toEntity(request));
        return mapper.toResponse(saved);
    }

    @Override
    public List<NoteResponse> list() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .toList();
    }
}

package com.example.notes.note.mapper;

import com.example.notes.note.domain.Note;
import com.example.notes.note.dto.CreateNoteRequest;
import com.example.notes.note.dto.NoteResponse;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

// Used MapStruct to handle conversion between DTOs and entities automatically
@Mapper(componentModel = "spring")
public interface NoteMapper {
    Note toEntity(CreateNoteRequest request);
    NoteResponse toResponse(Note entity);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateEntity(Note source, @MappingTarget Note target);
}

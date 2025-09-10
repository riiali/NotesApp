package com.example.notes.note.dto;

import java.time.Instant;

public record NoteResponse(
        Long id,
        String title,
        String text,
        Instant createdAt,
        Instant updatedAt
) {
}

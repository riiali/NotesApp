package com.example.notes.note.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateNoteRequest(@NotBlank @Size(max = 200) String title, String text) { } //in the exercise was not specified that empty text is not allow, so I'll allow it.


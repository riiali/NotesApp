package com.example.notes.note.domain;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, columnDefinition = "text")
    private String text;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now(); //first time note is created date should be saved. This dateTime should not be changed in future (updatable = false)

    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt = Instant.now(); //dateTime will be updated every time there is a change

    @PreUpdate
    void onUpdate() { this.updatedAt = Instant.now(); }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

}

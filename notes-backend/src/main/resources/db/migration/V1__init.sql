CREATE TABLE notes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_notes_created_at ON notes(created_at);

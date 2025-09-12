# Notes app
This is a full stack application for note generation. 

- Frontend: Angular 19
- Backend: Spring Boot (Java 21) with PostgreSQL and Docker

## Requirements 
- Docker
- Node.js 20+ and npm 
- Java 21 
- Angular CLI 

## Quick start 
After cloning the repo: 
### Start docker 
In repo's root: 
```sh
docker-compose up --build
```

### Start frontend 
In frontend folder: 
```sh
npm install 
npm run start:proxy
```

## Features
### Key apis: 
| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| GET    | `/api/notes`       | Lists all notes            |
| POST   | `/api/notes`       | Creates a new note         |
| PUT    | `/api/notes/{id}`  | Updates an existing note   |
| DELETE | `/api/notes/{id}`  | Deletes a note             |

### Frontend 
- Notes are displayed as cards. Click on a card to expand and edit the note.
<img width="2835" height="1346" alt="image" src="https://github.com/user-attachments/assets/aa5b75de-5232-447d-b892-34744603c7a5" />
<img width="2839" height="1378" alt="image" src="https://github.com/user-attachments/assets/42e1b457-02e1-4ab5-bb3a-14c59a0d32c3" />

- To create a note, click the leftmost dashed card with the plus sign.
<img width="2652" height="1371" alt="image" src="https://github.com/user-attachments/assets/a8aaa56c-400b-46b1-8806-2ff031aa34a5" />

- To delete a note, click the red trash bin.

# SSR Editor

Starter project for DV1677 JSRamverk

av Olga Bruce och Martin Gillström


## Steg för att få initiala applikationen att fungera.
- npm install
- Skapa .env fil och sätt PORT
- Initiera databas $ bash ./db/reset_db.bash
- Skapa ett första dokument $ echo "INSERT INTO documents (title, content) VALUES ('First title', 'First content')" | sqlite3 db/docs.sqlite

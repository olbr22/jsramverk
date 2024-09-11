# SSR Editor

Starter project for DV1677 JSRamverk

av Olga Bruce och Martin Gillström


# Steg för att få initiala applikationen att fungera.
- npm install
- Skapa .env fil och sätt PORT
- Initiera databas $ bash ./db/reset_db.bash
- Skapa ett första dokument $ echo "INSERT INTO documents (title, content) VALUES ('First title', 'First content')" | sqlite3 db/docs.sqlite

# Val av UI-ramverk

Efter att ha övervägt tre ramverk – **React**, **Vue** och **Svelte**, har vi beslutat att använda **React** tillsammans med **Material UI** för att bygga vårt projekt. React erbjuder stor flexibilitet och ett stort ekosystem, medan Material UI ger färdiga komponenter som underlättar skapandet av ett användarvänligt och professionellt gränssnitt.

**Vue** har en smidigare inlärningskurva och bättre dokumentation, men vi valde bort det på grund av ett mindre ekosystem. **Svelte** är ett prestandaoptimerat alternativ, men används inte lika brett, vilket kan påverka jobbmöjligheter. **Angular** valde vi bort då det är ett tungt ramverk anpassat för stora enterprise-applikationer med hög säkerhet, vilket är överdrivet för vårt mindre projekt.

### React
React är ett open-source JavaScript-bibliotek för att bygga användargränssnitt, särskilt enstaka sidor (Single Page Applications, SPA). Det utvecklades av Facebook och gör det möjligt att skapa dynamiska webbapplikationer genom återanvändbara komponenter.

### Material UI
Material UI (MUI) är ett populärt UI-bibliotek för React, baserat på Googles Material Design-principer. Det erbjuder färdiga, moderna och responsiva komponenter som gör det enkelt att bygga professionella användargränssnitt.


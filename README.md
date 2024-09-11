# SSR Editor

Starter project for DV1677 JSRamverk

av Olga Bruce och Martin Gillström


# Steg för att få initiala applikationen att fungera.
- npm install
- Skapa .env fil och sätt PORT
- Initiera databas $ bash ./db/reset_db.bash
- Skapa ett första dokument $ echo "INSERT INTO documents (title, content) VALUES ('First title', 'First content')" | sqlite3 db/docs.sqlite

# Val av UI-ramverk

Efter att ha övervägt tre ramverk – **React**, **Vue** och **Svelte**, har vi beslutat att använda **Next.js** tillsammans med **Material UI** för att bygga vårt projekt. Under installationen av React-biblioteket stötte vi på svårigheter att lösa paket-sårbarheter, vilket gjorde att vi valde att använda **Next.js** istället. Next.js använder fortfarande React-komponenter men erbjuder fler funktioner, som server-side rendering och prestandaoptimering.

**Vue** har en smidigare inlärningskurva och bättre dokumentation, men vi valde bort det på grund av ett mindre ekosystem. **Svelte** är ett prestandaoptimerat alternativ, men används inte lika brett, vilket kan påverka jobbmöjligheter. **Angular** valde vi bort då det är ett tungt ramverk anpassat för stora enterprise-applikationer med hög säkerhet, vilket är överdrivet för vårt mindre projekt.

### Next.js
Next.js är ett open-source React-ramverk som erbjuder funktioner som server-side rendering (SSR) och statisk webbplatsgenerering. Det utvecklades av Vercel och är utmärkt för att bygga dynamiska, SEO-vänliga webbapplikationer med bättre prestanda, samtidigt som det använder React-komponenter.

### Material UI
Material UI (MUI) är ett populärt UI-bibliotek, baserat på Googles Material Design-principer. Det erbjuder färdiga, moderna och responsiva komponenter som gör det enkelt att bygga professionella användargränssnitt.
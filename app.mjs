import 'dotenv/config'

const port = process.env.PORT;

import express from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

import documents from "./docs.mjs";

const app = express();

app.disable('x-powered-by');

app.set("view engine", "ejs");

app.use(express.static(path.join(process.cwd(), "public")));

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// middle-ware read more > https://expressjs.com/id/resources/middleware/method-override.html
app.use(methodOverride('_method'));
// shows which request method is used e.g., POST,PUT,DELETE
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, Original Method: ${req.originalMethod}`);
    next();
});


// A simple POST route for testing
// app.post("/", (req, res) => {
//     res.send("POST request triggered");
// });

// Create a new document
app.post("/document", async (req, res) => {
    await documents.addOne(req.body);

    return res.redirect('/');
});

// Updates an existing document
app.put("/document", async (req, res) => {
    await documents.updateDocument(req.body)
    return res.redirect(`/update/${req.body.id}`);
});

// Shows create document form
app.get('/create', (req, res) => {
    res.render('document/create');
});

// Shows update document form
app.get('/update/:id', async (req, res) => {
    res.render('document/update', { doc: await documents.getOne(req.params.id) });
});

app.get('/:id', async (req, res) => {
    return res.render(
        'document/update',
        { doc: await documents.getOne(req.params.id) }
    );
});

// Shows index page view
app.get('/', async (req, res) => {
    return res.render("index", { docs: await documents.getAll() });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
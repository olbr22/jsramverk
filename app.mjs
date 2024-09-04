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
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, Original Method: ${req.originalMethod}`);
    next();
});

app.post("/", async (req, res) => {
    const result = await documents.addOne(req.body);

    return res.redirect(`/${result.lastID}`);
});

// app.put("/", async (req, res) => {
//     // PUT requests should return 204 No Content
//     res.send("PUT route triggered successfully!");
// });

// A simple POST route for testing
// app.post("/", (req, res) => {
//     res.send("POST request triggered");
// });

// A simple PUT route for testing
app.put("/", async (req, res) => {
    await documents.updateDocument(req.body)
    return res.redirect('/');
    // return res.render("index", { docs: await documents.getAll() });
    // res.send(req.body);
    // res.send("PUT request triggered");
});

app.get('/:id', async (req, res) => {
    return res.render(
        "doc",
        { doc: await documents.getOne(req.params.id) }
    );
});

app.get('/', async (req, res) => {
    return res.render("index", { docs: await documents.getAll() });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
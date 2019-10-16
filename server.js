const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const docs = require('./api');
const config = require('./config.json');
const urls = require('./api/urls');

const app = express();

const baseUrl = config.url;
const port = config.port;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));
app.get('/', (req, res) => {
    res.render('doc', urls(baseUrl, port));
});

async function loadDocs() {
    for (const key of Object.keys(docs)) {
        const doc = await docs[key];
        app.get(`/${key}`, (req, res, next) => {
            app.use(`/${key}`, swaggerUi.serve, swaggerUi.setup(doc));
            next();
        });
    }
}

loadDocs().then(() => {
    const server = app.listen(port, () => {
        console.log(`Server is running - '${baseUrl}:${server.address().port}`);
    });
});



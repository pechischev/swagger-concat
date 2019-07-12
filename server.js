const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const docs = require('./api');
const config = require('./config.json');

const app = express();

const baseUrl = config.url;
const options = {
    definitions: `${baseUrl}/doc/definitions`,
    common: `${baseUrl}/doc/common`,
    customer: `${baseUrl}/doc/customer`,
};

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));
app.get('/doc', (req, res) => {
    res.render('doc', options);
});

async function loadDocs() {
    for (const key of Object.keys(docs)) {
        const doc = await docs[key];
        app.get(`/doc/${key}`, (req, res, next) => {
            app.use(`/doc/${key}`, swaggerUi.serve, swaggerUi.setup(doc));
            next();
        });
    }
}

loadDocs().then(() => {
    const server = app.listen(3000, () => {
        console.log(`'Listening on port '${server.address().port}`);
    });
});



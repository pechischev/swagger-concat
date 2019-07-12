const express = require('express');
const swaggerUi = require('swagger-ui-express');
const docs = require('./api');


const app = express();

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



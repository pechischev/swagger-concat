# Swagger Api Docs

This project for write and support API on Swagger.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

-   [Node.js](https://nodejs.org/en/) - runtime for backend & tooling
-   [Swagger](https://swagger.io/docs/specification/about/) - specification a swagger format 

### Installing

This command will install all dependencies from `package.json`

 ```bash
$ npm install
```

Need create `config.json` by format:
```json
{
  "url": "url server",
  "port": 8600
}
```

To start the server use this command

 ```bash
$ npm run start
```

All, server is running.

## Deployment

TPD: write about deploy

## Using

#### Steps added section

1. Create yaml file in directory `api` and write here.
2. Write new module in `api/index.js` and set url in `api/urls.js`.
3. `views/doc.pug` set container and link

## License

This project is licensed under the MIT License.


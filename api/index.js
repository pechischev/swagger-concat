const fs = require('fs');
const JsonRefs = require('json-refs');
const YAML = require('js-yaml');

function yamlContentProcessor (res, callback) {
    callback(undefined, YAML.safeLoad(res.text));
}

async function getSwaggerDocWithRefs(rootFilePath){
    let rootOpenApiJSON = YAML.load(fs.readFileSync(rootFilePath).toString());
    let swaggerDoc = await JsonRefs.resolveRefs(rootOpenApiJSON, {
        location : rootFilePath,
        loaderOptions: {
            processContent: yamlContentProcessor
        },
    });
    return swaggerDoc.resolved;
}

module.exports = {
    common: getSwaggerDocWithRefs("./api/common.yaml"),
    customer: getSwaggerDocWithRefs("./api/customer.yaml"),
    definitions: getSwaggerDocWithRefs("./api/definitions.yaml"),
};
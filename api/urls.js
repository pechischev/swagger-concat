module.exports = function(url, port) {
    return {
        definitions: `${url}:${port}/definitions`,
        common: `${url}:${port}/common`,
        customer: `${url}:${port}/customer`,
    }
};
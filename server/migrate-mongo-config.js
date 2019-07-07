// In this file you can configure migrate-mongo

const config = require('config');
const dbConfig = config.get('dbConfig');

module.exports = {
    mongodb: {
        url: dbConfig.host,
        databaseName: dbConfig.dbName,
        options: {
            useNewUrlParser: true
        }
    },
    changelogCollectionName: "changelog"
};

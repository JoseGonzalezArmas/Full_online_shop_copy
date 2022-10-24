const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');


/**
 * Creates a store object, needed for creating a session config
 * @returns The store object just created
 * 
 */
function createSessionStore() {
    const MongoDbStore = mongoDbStore(expressSession);

    // create a store object
    const store = new MongoDbStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'Kiro',
        collection: 'sessions'
    });

    // return the store object
    return store;
} // here ends createSessionStore


function createSessionConfig() {
    const sessionConfig = {
        secret: 'this is a secret',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2*24*60*60*1000
        }
    };

    return sessionConfig;
} // here ends createSessionConfig

module.exports = createSessionConfig;

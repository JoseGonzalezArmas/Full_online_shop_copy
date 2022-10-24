// import mongdb
const mongdb = require('mongodb');

// create the mongoClient
const MongoClient = mongdb.MongoClient;

// define the database
let database;

/**
 * Creates the connection to the database
 * 
 */
async function connectToDataBase() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('Kiro'); // create the connnection to Kiro (the name of the shop)
}


/**
 * Getter for the database
 * 
 * @returns The database instace, if it is defined
 * 
 */
function getDb() {
    if (!database) {
        // the database is undefined
        throw new Error('No connection to the database established');
    }

    return database;
} // here ends getDb


module.exports = {
    connectToDataBase: connectToDataBase,
    getDb: getDb
}
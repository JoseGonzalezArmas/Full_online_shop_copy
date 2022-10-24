const bcryptjs = require('bcryptjs');
const mongodb = require('mongodb');

const db = require('../data/database');
/**
 * A class to represent a user in the website
 * 
 */
class User {

    constructor(email, password, name, address) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
    } // here ends the constructor



} // here ends the class


// export it
module.exports = User;
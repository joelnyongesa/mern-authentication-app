import { MongoClient } from "mongodb";

let client;

export const initializeConnection = async() => {
    client = await MongoClient.connect('mongodb://localhost:27017',)
};

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
};
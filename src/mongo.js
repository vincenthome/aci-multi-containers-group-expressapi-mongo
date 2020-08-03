/* eslint-disable no-console */
const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
// MongDB Atlas
// const UID = process.env.MONGOUID;
// const PWD = process.env.MONGOPWD;
// const DB = 'mydb';
// const URI = `mongodb+srv://${UID}:${PWD}@cluster0.hhvws.azure.mongodb.net/helloworlddb?retryWrites=true&w=majority`;

// MongoDB ACI
const DB = 'mydb';
const URI = `mongodb://127.0.0.1:27017/${DB}?retryWrites=true`;

const COLLECTION = 'users';
async function getCollection(client) {
  await client.connect();
  const database = client.db(DB);
  return database.collection(COLLECTION);
}

async function create(document) {
  const client = new MongoClient(URI);
  try {
    const collection = await getCollection(client);
    // const result  = await collection.insertMany(docs);
    const result = await collection.insertOne(document);
    console.log(`Created Count: ${result.insertedCount}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function readAll(query) {
  const client = new MongoClient(URI);
  console.log(URI);
  try {
    const collection = await getCollection(client);
    const sort = {
      createtime: -1
    };
    // const options = {
    //     // sort in descending (-1) order by rating
    //     sort : { age: -1 },
    //     // omit the first two documents
    //     skip : 2,
    // }
    // const cursor = await collection.find(query).sort({age: 1}).skip(1).limit(5).project({firstname: 1, age: 1, _id: 1});
    const documents = await collection.find(query).sort(sort).toArray();
    return documents;
  } catch(error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function readOne(query) {
  const client = new MongoClient(URI);
  try {
    const collection = await getCollection(client);
    const options = {
      // projection: { _id: 0 },
    };
    const document = await collection.findOne(query, options);
    return document;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function update(query, document) {
  const client = new MongoClient(URI);
  try {
    const collection = await getCollection(client);
    const result = await collection.updateOne(query, document);
    console.log(`Modified Count: ${result.modifiedCount}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function deleteOne(query) {
  const client = new MongoClient(URI);
  try {
    const collection = await getCollection(client);
    const result = await collection.deleteOne(query);
    console.log(`Deleted Count: ${result.deletedCount}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function count(query) {
  const client = new MongoClient(URI);
  try {
    const collection = await getCollection(client);
    console.log(query);
    const documentCount = await collection.find(query).count();
    return documentCount;
  } catch(error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

module.exports = {
    create,
    readAll,
    readOne,
    update,
    deleteOne,
    count
}
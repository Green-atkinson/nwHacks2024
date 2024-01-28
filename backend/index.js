const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "URL";

// Connect to your Atlas cluster
const db = new MongoClient(url);

var dbo = db.db("nwHacks");

async function run() {
  try {
    await db.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  }
}

async function createCollection() {
  try {
    await db.connect();
    dbo.createCollection("users");
    console.log("Successfully created collection");
  } catch (err) {
    console.log(err.stack);
  }
}

async function insertUser() {
  try {
    await db.connect();
    var a = await dbo.admin().listDatabases();
    dbo.collection("users").insertOne({
      user_name: "hacker",
      user_email: "email.com",
      user_password: "1234",
    });
    console.log(a);
  } catch (err) {
    console.log(err.stack);
  }
}

/* run().catch(console.dir); */

/* createCollection().catch(console.dir);
 */
insertUser().catch(console.dir);

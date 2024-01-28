// get read
// post create
// patch update
// delete destroy

// express
const express = require('express')
const app = express()
const port = 5000

//mongodb
const { MongoClient } = require("mongodb");

const url =
  "URL";

const db = new MongoClient(url);

var dbo = db.db("nwHacks");

app.listen(port, () => {
    console.log('server running on port 5000')
})

app.get("/api", (req, res) => {
  res.json({ "user" : ["userOne", "userTwo", "userThree"] });
})


/* 
//gonna be post
//create the table (users, produce)
app.get('/', async (req,res) => {
    try {
        db.connect();
        await dbo.collection("users").insertOne({
          user_name: "hacker2",
          user_email: "email.com",
          user_password: "1234",
        });

        await dbo.collection("produce").insertOne({
            product_name: "apple",
            product_condition: "fresh",
        })
      } catch (err) {
        console.log(err.stack);
      }
})


app.get('/delete', async (req, res) => {
    try {
        db.connect();
        await dbo.collection("produce").deleteOne({
            product_name: "apple",
        });
    } catch (err) {
        console.log(err.stack);
    }
}) */
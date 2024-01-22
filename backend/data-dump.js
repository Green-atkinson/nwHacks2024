const Produce = require('./model/post');
const User = require('./models/user');
const mongoose = require("mongoose");
const {Types} = require("mongoose");

function generateUsers(){
    const user1 = new User({
        _id: "e1i2124e-1921-1293-1232-asf1s9c2sj2c",
        produces: [
            { // Carrots
                _id: "aba2eq122f22-1s12-1mn2-12sa-as21km2j3j11"
            },{ // Tomatos
                _id: "112m12jjnndm-1235-19m2-1m23-2nj2mnbj23o2"
            }
        ],
        username: "aronn",
        email: "aronn@gmail.com",

    });

    // Saving user to database
    User.insertMany([aronn], function(err) {
        if(err){
            console.log(err);
        } else {
            console.log("Save users to database!")
        }
    })
}

function generateProduce(){
    // adding a recipe
    const carrot = new Produce({
        _id: "aba2eq122f22-1s12-1mn2-12sa-as21km2j3j11",
        pName: "Carrots",
        quantity: 1
    });

    const tomato = new Produce({
        _id: "112m12jjnndm-1235-19m2-1m23-2nj2mnbj23o2",
        pName: "Tomato",
        quantity: 3
    });

    post.insertMany([carrot, tomato], function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("Saved Produce to database!")
        }
    })

}
const express = require('express');
const router = express.Router();

const { Produce, User } = require("../models");


// Post  'New' Vege


// patch add/less vege



// get ListVeges


// destroy veges
router.delete('/:', async function(req, res){
    try {
        await User.deleteOne({firebaseUID: req.params.firebaseUID});
		return res.status(200).send('Deleted'); 
    } catch (e) {
        
    }
})


// export
module.exports = router;
const express = require('express');
const router = express.Router();


User = require('../models/user');

router.post('/', (req, res) => {
    const user = req.body;

    User.addUser(user, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(user);
    });
});


 

module.exports = router;
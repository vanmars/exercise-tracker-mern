const router = require('express').Router();
let User = require('../models/user.model');

// First Endpoint
router.route('/').get((req,res) => {
  User.find() // a mongoose method that finds all users and returns a promise
    .then(users => res.json(users)) // return something in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
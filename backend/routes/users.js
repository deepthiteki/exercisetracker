const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/users/add').post(async(req, res) => {
  const{username,password,name,email} = req.body;
  // const username = req.body.username;
  const newUser = await User.create({
    username,
    password,
    name,
    email
  });
  return res.status(200).json(newUser);

  // const newUser = new User({username});
  // console.log(newUser);

  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
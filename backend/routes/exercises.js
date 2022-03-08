const router = require('express').Router();
let Exercise = require('../models/exercise.model');
const User = require('../models/user.model');

router.route('/').get(async(req, res) => {
  console.log("here")
  const exer = await Exercise.find();
  // Exercise.find().populate('user')
  //   .then(exercises => res.json(exercises))
  //   .catch(err => res.status(400).json('Error: ' + err));
  return res.status(200).json(exer)
});

router.route('/add').post(async(req, res) => {
  const{
    username,
    description,
    duration,
    date
  } = req.body;

  const user = await User.findOne({username: username});
  console.log(user)
  
  
  const newExercise = await Exercise.create({
    user: username,
    description,
    duration,
    date,
  });
  

  return res.status(200).json(newExercise);
});

router.route('/exercies/:id').get((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
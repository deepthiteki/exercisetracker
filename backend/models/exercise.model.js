const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  user: { 
    type:String,
    // ref:"users"

   },
  description: { 
    type: String, 
    required: true 
  },
  difficulty:{
    type:String,
    enum:["L","M","H"]
  },
  duration: {
     type: Number, required: true
     },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
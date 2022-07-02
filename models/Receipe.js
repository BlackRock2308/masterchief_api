const mongoose = require('mongoose');

const ReceipeSchema = new mongoose.Schema({
  recipe_name: {
    type: String,
    required: true
  },
  recipe_description: {
    type: String,
    required: true
  },
  recipe_image: {
    type: String,
    required: true
  },
  recipe_nutriment: {
    type: Array,
    required: false
  },
  recipe_prep_time: {
    type: Number,
    required: false
  },
  recipe_servings: {
    type: String,
    required: false
  },
  recipe_ingredients: {
    type: Array,
    required: false
  },
  recipe_procedure: {
    type: Text,
    required: true
  },
  recipe_url: {
    type: String,
    required: true
  }
});

//const User = mongoose.model('User', UserSchema);

module.exports = User;
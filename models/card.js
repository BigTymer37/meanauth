const mongoose = require('mongoose');
const config = require('../config/database');
var Schema = mongoose.Schema;

// User Schema
const CardSchema = mongoose.Schema({
  cardname: {
    type: String
  },
  cardinfo: {
    type: String,
    required: true
  },
  attribute: {
    type: String,
    required: true
  },
  imagename: {
    type: String,
    reuired: true
  }
});

const Card = module.exports = mongoose.model('Cards', CardSchema);


module.exports.getCardById = function(id, callback){
  const query = ({cardname:cardname})
  Card.findById(id,callback);
}

module.exports.addCard = function(newCard, callback){
  newCard.save(callback);
}

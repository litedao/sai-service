const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Pip: USD/ETH
const Pip = new Schema(
  {
    "value": Number,
    "last_block": Number,
    "timestamp": Number,
  });

mongoose.model('Pip', Pip);

// Par: USD/SAI
const Par = new Schema(
  {
    "value": Number,
    "last_block": Number,
    "timestamp": Number,
  });

mongoose.model('Par', Par);

// Per: ETH/SKR
const Per = new Schema(
  {
    "value": Number,
    "last_block": Number,
    "timestamp": Number,
  });

mongoose.model('Per', Per);

// Cups
const Cup = new Schema(
  {
    "cupi": Number,
    "lad": String,
    "closed": Boolean,
    "last_block": Number,
  });

mongoose.model('Cup', Cup);

module.exports = {
  mongoose
}

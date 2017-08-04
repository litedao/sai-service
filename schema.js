const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Several vars
const Var = new Schema(
  {
    "name": String,
    "value": Number,
  });
mongoose.model('Var', Var);

// Pip: USD/ETH
const Pip = new Schema(
  {
    "value": Number,
    "last_block": Number,
    "timestamp": Number,
  });
mongoose.model('Pip', Pip);

// Way: USD/SAI
const Way = new Schema(
  {
    "value": Number,
    "last_block": Number,
    "timestamp": Number,
  });
mongoose.model('Way', Way);

// Mat: liq. ratio
const Mat = new Schema(
  {
    "value": Number,
    "last_block": Number,
    "timestamp": Number,
  });
mongoose.model('Mat', Mat);

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
    "art": Number,
    "ink": Number,
    "closed": Boolean,
    "last_block": Number,
  });
mongoose.model('Cup', Cup);

// CupHistoryActions
const CupHistoryAction = new Schema(
  {
    "action": String, // open - shut - give - lock - free - draw - wipe - bite
    "cupi": Number,
    "sender": String,
    "param": String,
    "timestamp": Number,
    "block": Number,
    "transactionHash": String,
  });
mongoose.model('CupHistoryAction', CupHistoryAction);

module.exports = {
  mongoose
}

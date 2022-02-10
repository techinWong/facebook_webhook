const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacebookSchema = new Schema({
    senderId:String,
    recipientId:String,
    timestamp:String,
    text:String
})

const FacebookDB = mongoose.model('FacebookDB',FacebookSchema)

module.exports = FacebookDB;
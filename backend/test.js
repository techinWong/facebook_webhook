const mongoose = require('mongoose')
const FacebookDB = require('./models/FacebookDB')

mongoose.connect('mongodb://localhost/facebookDB', {
    useNewUrlParser:true
})

FacebookDB.create({
    senderId:'test',
    recipientId:'test'
},(error,facebook) => {
    console.log(error,facebook)
})
const mongoose = require('mongoose');

// mongo connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});


const db = mongoose.connection;


db.once('open', () => {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`)
});

db.on('error', (error) => {
    console.log(`Database error\n${error}`);
});

module.exports.User = require('./User');
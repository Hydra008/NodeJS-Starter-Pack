const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const options = {
    useNewUrlParser: true
};

mongoose.startConnection = startConnection =  ()=> {
    mongoose.connect('mongodb://127.0.0.1:27017/toDoList', options, (error) => {
        if (error) {
            console.log(err)
        }
        else {
            console.log("Connection to mongodb successful")
        }
    });
};

module.exports = mongoose;
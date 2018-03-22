var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017/TodoApp');




var Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAT: {
        type: Number
    }
});


var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');




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

// var newTodo = new Todo({
//     text: 'Go to quiz'
// });

// newTodo.save().then((doc) =>{
//     console.log('Saved todo',doc)
// },(e) =>{
//     console.log('Unable to save');
    
// });

var newTodo = new Todo({
    text: 'Get Up Morning',
    completed: true,
    completedAT: 3453
});
newTodo.save().then((doc) =>{
    console.log('Saved todo',doc)
},(err) =>{
    console.log('Unable to save ',err);
});


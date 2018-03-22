var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'galabpokh@gmail.com',
      pass: ''
    }
  });
  


// var Todo = mongoose.model('Todo',{
//     text: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAT: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Go to quiz'
// });

// newTodo.save().then((doc) =>{
//     console.log('Saved todo',doc)
// },(e) =>{
//     console.log('Unable to save');
    
// });

// var newTodo = new Todo({
//     text: 'Get Up Morning',
//     completed: true,
//     completedAT: 3453
// });
// newTodo.save().then((doc) =>{
//     console.log(JSON.stringify(doc, undefined, 2));
// },(err) =>{
//     console.log('Unable to save ',err);
// });


// var newTodo = new Todo({text: '  This is a test. '});
// newTodo.save().then((doc) =>{
//     console.log(JSON.stringify(doc, undefined, 2));
// },(err) =>{
//     console.log('Unable to save ',err);
// });


var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({email: 'galabpokh@gmail.com'});
newUser.save().then((doc) =>{
    console.log(JSON.stringify(doc, undefined, 2));
    var mailOptions = {
        from: '149maxwellgalab@gmail.com',
        to: 'galabpokh@gmail.com',
        subject: 'Subject',
        text: 'Sending from node js'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
},(err) =>{
    console.log('Unable to create User',err);
});
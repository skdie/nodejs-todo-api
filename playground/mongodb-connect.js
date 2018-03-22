// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name :'galab', age: 23};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if (err){
        return Console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if (err){
    //         return console.log('Unable to insert todo',err);    
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });


    //Insert new doc into Users ( name, age, location)

    db.collection('Users').insertOne({
        // _id: 123,
        name: 'Saurav Pokharel',
        age: 20,
        location: 'Biratnagar -04, Morang'
    }, (err,result) =>{
        if (err){
            return console.log('Unable to insert the infos',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
        
    });



    db.close();
});
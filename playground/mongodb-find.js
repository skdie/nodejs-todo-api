// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if (err){
        return Console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find().toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));

    // db.collection('Todos').find({'completed':false}).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    
        

    // }, (err) =>{
    //     console.log('Unable to fetch data'.err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count : ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch todos count ',err);
    // });


    db.collection('Users').find({name: 'Saurav Pokharel'}).toArray().then((docs) =>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        Console.log('Unable to fetch the data ',err);
    });
      


    db.close();
});
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if (err){
        return Console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server');

    //delete Many
    // db.collection('Users').deleteMany({name: 'Saurav'}).then((result) =>{
    //     console.log(result);
    // })


    //delete One
    // db.collection('Users').deleteOne({name: 'Saurav'}).then((result) =>{
    //     console.log(result);
    // });

    
    //find One and delete
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5ab3d86e3279ae1ad8fb4f51')}).then((result) =>{
    //     console.log('Success',result);
    // });

    
    // db.collection('Users').findOneAndDelete({name: 'Saurab'}).then((result) =>{
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

     db.close();
});
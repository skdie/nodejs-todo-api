// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if (err){
        return Console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ab3bfcae42f11226444fcfd')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });


    // db.collection('Users').findOneAndUpdate({
    //     _id:new ObjectID('5ab3d868e02bcd1d5487aaf7')
    // },{
    //     $set: {
    //         name: 'Saurav Pokharel',
            
    //     },
    //     $inc: {
    //         age: -1
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });

    
     db.close();
});
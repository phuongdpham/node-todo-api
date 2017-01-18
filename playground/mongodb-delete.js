// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat launch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat launch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: 'Phuong'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('587e4fbbc1113000f0915a5e')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });
  // db.close();
});

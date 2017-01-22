const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5884430361100f7355775019'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5884430361100f7355775019').then((todo) => {
  console.log(todo);
});

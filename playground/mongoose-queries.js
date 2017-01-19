const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5880b1df275ed51cbc4615711';
//
// if (!ObjectId.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '587f89b803c0b112042df12f';

if (!ObjectId.isValid(userId)) {
  console.log('User ID not valid');
}

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User Id not found');
  }
  console.log('User By Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

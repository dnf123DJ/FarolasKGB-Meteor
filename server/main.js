import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
Todos = new Mongo.Collection('Farolas');

Meteor.methods({
  "mongodb.update"(id,nota) {
    check(id, String);
    check(nota, String);
    //Todos.update( {id: res.id}, {$set: { nota:nota },});
    Todos.update(id,
      { $set:
         {nota:nota}
      });
  }
});

Meteor.startup(() => {
  // code to run on server at startup

});

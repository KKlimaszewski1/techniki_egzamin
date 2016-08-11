Meteor.publish('zadania', function(){
  return Zadania.find({autor: this.userId});
});

Meteor.publish('pojedynczeZadanie', function(id){
  check(id, String);
  return Zadania.find({_id: id});
});

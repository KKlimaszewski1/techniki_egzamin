Template.ZadaniaNaDzis.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('zadania');
  });
});

Template.ZadaniaNaDzis.helpers({
  zadania: ()=> {
    return Zadania.find({wLiscieZadan: true});
  }
});

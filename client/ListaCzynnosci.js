Template.ListaCzynnosci.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('zadania');
  });
});

Template.ListaCzynnosci.helpers({
  listaCzynnosci: ()=> {
    return Zadania.find({wLiscieZadan: true});
  }
});

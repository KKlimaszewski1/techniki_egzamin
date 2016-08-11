Template.ZadaniaWykonane.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('zadania');
  });
});

Template.ZadaniaWykonane.helpers({
  zadania: ()=> {
    return Zadania.find({zadaniaWykonane: true});
  }
});

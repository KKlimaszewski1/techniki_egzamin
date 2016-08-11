Template.Zadania.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('zadania');
  });
});

Template.Zadania.helpers({
  zadania: ()=> {
    return Zadania.find({});
  }
});

Template.Zadania.events({
  'click .nowe-zadanie': () => {
    Session.set('noweZadanie', true);
  }
});

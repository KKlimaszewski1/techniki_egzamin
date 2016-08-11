Template.PojedynczeZadanie.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('pojedynczeZadanie', id);
  });
});

Template.PojedynczeZadanie.helpers({
  zadanie: ()=> {
    var id = FlowRouter.getParam('id');
    return Zadania.findOne({_id: id});
  }
});

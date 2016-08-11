Template.Zadanie.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Zadanie.helpers({
  updateZadanieId: function() {
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  }
});

Template.Zadanie.events({
  'click .toggle-lista-zadan': function(){
    Meteor.call('toggleListaZadan', this._id, this.wLiscieZadan);
  },
  'click .toggle-zadania-wykonane': function(){
    Meteor.call('toggleZadaniaWykonane', this._id, this.zadaniaWykonane);
  },
  'click .fa-trash' : function(){
    Meteor.call('deleteZadanie', this._id);
  },
  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  }
});

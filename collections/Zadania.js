Zadania = new Mongo.Collection('zadania');

Zadania.allow({
  insert: function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

Czynnosc = new SimpleSchema({
  nazwa: {
    type: String
  },
  opis: {
    type: String
  }
});

Zadanie = new SimpleSchema({
  nazwa: {
    type: String,
    label: "Nazwa"
  },
  opis: {
    type: String,
    label: "Opis"
  },
  czynnosci: {
    type: [Czynnosc]
  },
  wLiscieZadan: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  zadaniaWykonane: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  autor: {
    type: String,
    label: "Autor",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  toggleListaZadan: function(id, currentState){
    Zadania.update(id, {
      $set: {
        wLiscieZadan: !currentState,
        zadaniaWykonane: false
      }
    });
  },
  toggleZadaniaWykonane: function(id, currentState){
      Zadania.update(id, {
        $set: {
          zadaniaWykonane: !currentState,
          wLiscieZadan: false
        }
      });
    },
  deleteZadanie: function(id){
    Zadania.remove(id);
  }
});

Zadania.attachSchema( Zadanie );

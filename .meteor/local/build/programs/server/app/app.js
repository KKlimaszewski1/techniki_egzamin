var require = meteorInstall({"lib":{"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// lib/routes.js                                                            //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
if (Meteor.isClient) {                                                      // 1
  Accounts.onLogin(function () {                                            // 2
    FlowRouter.go('ksiazka-zadan');                                         // 3
  });                                                                       // 4
                                                                            //
  Accounts.onLogout(function () {                                           // 6
    FlowRouter.go('home');                                                  // 7
  });                                                                       // 8
}                                                                           // 9
                                                                            //
FlowRouter.triggers.enter([function (context, redirect) {                   // 11
  if (!Meteor.userId()) {                                                   // 12
    FlowRouter.go('home');                                                  // 13
  }                                                                         // 14
}]);                                                                        // 15
                                                                            //
FlowRouter.route('/', {                                                     // 17
  name: 'home',                                                             // 18
  action: function action() {                                               // 19
    if (Meteor.userId()) {                                                  // 20
      FlowRouter.go('ksiazka-zadan');                                       // 21
    }                                                                       // 22
    BlazeLayout.render('HomeLayout');                                       // 23
  }                                                                         // 24
});                                                                         // 17
                                                                            //
FlowRouter.route('/ksiazka-zadan', {                                        // 27
  name: 'ksiazka-zadan',                                                    // 28
  action: function action() {                                               // 29
    BlazeLayout.render('MainLayout', { main: 'Zadania' });                  // 30
  }                                                                         // 31
});                                                                         // 27
                                                                            //
FlowRouter.route('/zadanie/:id', {                                          // 34
  name: 'zadanie',                                                          // 35
  action: function action() {                                               // 36
    BlazeLayout.render('MainLayout', { main: 'PojedynczeZadanie' });        // 37
  }                                                                         // 38
});                                                                         // 34
                                                                            //
FlowRouter.route('/zadania-na-dzis', {                                      // 41
  name: 'zadania-na-dzis',                                                  // 42
  action: function action() {                                               // 43
    BlazeLayout.render('MainLayout', { main: 'ZadaniaNaDzis' });            // 44
  }                                                                         // 45
});                                                                         // 41
                                                                            //
FlowRouter.route('/lista-czynnosci', {                                      // 48
  name: 'lista-czynnosci',                                                  // 49
  action: function action() {                                               // 50
    BlazeLayout.render('MainLayout', { main: 'ListaCzynnosci' });           // 51
  }                                                                         // 52
});                                                                         // 48
                                                                            //
FlowRouter.route('/zadania-wykonane', {                                     // 55
  name: 'zadania-wykonane',                                                 // 56
  action: function action() {                                               // 57
    BlazeLayout.render('MainLayout', { main: 'ZadaniaWykonane' });          // 58
  }                                                                         // 59
});                                                                         // 55
//////////////////////////////////////////////////////////////////////////////

}},"collections":{"Zadania.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// collections/Zadania.js                                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Zadania = new Mongo.Collection('zadania');                                  // 1
                                                                            //
Zadania.allow({                                                             // 3
  insert: function insert(userId, doc) {                                    // 4
    return !!userId;                                                        // 5
  },                                                                        // 6
  update: function update(userId, doc) {                                    // 7
    return !!userId;                                                        // 8
  }                                                                         // 9
});                                                                         // 3
                                                                            //
Czynnosc = new SimpleSchema({                                               // 12
  nazwa: {                                                                  // 13
    type: String                                                            // 14
  },                                                                        // 13
  opis: {                                                                   // 16
    type: String                                                            // 17
  }                                                                         // 16
});                                                                         // 12
                                                                            //
Zadanie = new SimpleSchema({                                                // 21
  nazwa: {                                                                  // 22
    type: String,                                                           // 23
    label: "Nazwa"                                                          // 24
  },                                                                        // 22
  opis: {                                                                   // 26
    type: String,                                                           // 27
    label: "Opis"                                                           // 28
  },                                                                        // 26
  czynnosci: {                                                              // 30
    type: [Czynnosc]                                                        // 31
  },                                                                        // 30
  wLiscieZadan: {                                                           // 33
    type: Boolean,                                                          // 34
    defaultValue: false,                                                    // 35
    optional: true,                                                         // 36
    autoform: {                                                             // 37
      type: "hidden"                                                        // 38
    }                                                                       // 37
  },                                                                        // 33
  zadaniaWykonane: {                                                        // 41
    type: Boolean,                                                          // 42
    defaultValue: false,                                                    // 43
    optional: true,                                                         // 44
    autoform: {                                                             // 45
      type: "hidden"                                                        // 46
    }                                                                       // 45
  },                                                                        // 41
  autor: {                                                                  // 49
    type: String,                                                           // 50
    label: "Autor",                                                         // 51
    autoValue: function autoValue() {                                       // 52
      return this.userId;                                                   // 53
    },                                                                      // 54
    autoform: {                                                             // 55
      type: "hidden"                                                        // 56
    }                                                                       // 55
  },                                                                        // 49
  createAt: {                                                               // 59
    type: Date,                                                             // 60
    label: "Created At",                                                    // 61
    autoValue: function autoValue() {                                       // 62
      return new Date();                                                    // 63
    },                                                                      // 64
    autoform: {                                                             // 65
      type: "hidden"                                                        // 66
    }                                                                       // 65
  }                                                                         // 59
});                                                                         // 21
                                                                            //
Meteor.methods({                                                            // 71
  toggleListaZadan: function toggleListaZadan(id, currentState) {           // 72
    Zadania.update(id, {                                                    // 73
      $set: {                                                               // 74
        wLiscieZadan: !currentState,                                        // 75
        zadaniaWykonane: false                                              // 76
      }                                                                     // 74
    });                                                                     // 73
  },                                                                        // 79
  toggleZadaniaWykonane: function toggleZadaniaWykonane(id, currentState) {
    Zadania.update(id, {                                                    // 81
      $set: {                                                               // 82
        zadaniaWykonane: !currentState,                                     // 83
        wLiscieZadan: false                                                 // 84
      }                                                                     // 82
    });                                                                     // 81
  },                                                                        // 87
  deleteZadanie: function deleteZadanie(id) {                               // 88
    Zadania.remove(id);                                                     // 89
  }                                                                         // 90
});                                                                         // 71
                                                                            //
Zadania.attachSchema(Zadanie);                                              // 93
//////////////////////////////////////////////////////////////////////////////

}},"server":{"init.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/init.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {});                                             // 3
//////////////////////////////////////////////////////////////////////////////

}],"publish.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/publish.js                                                        //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Meteor.publish('zadania', function () {                                     // 1
  return Zadania.find({ autor: this.userId });                              // 2
});                                                                         // 3
                                                                            //
Meteor.publish('pojedynczeZadanie', function (id) {                         // 5
  check(id, String);                                                        // 6
  return Zadania.find({ _id: id });                                         // 7
});                                                                         // 8
//////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/routes.js");
require("./collections/Zadania.js");
require("./server/init.js");
require("./server/publish.js");
//# sourceMappingURL=app.js.map

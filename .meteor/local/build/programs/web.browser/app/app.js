var require = meteorInstall({"client":{"layouts":{"template.MainLayout.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/layouts/template.MainLayout.js                                                             //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("MainLayout");                                                                  // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                           // 3
  var view = this;                                                                                   // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), "\n    ", Spacebars.include(view.lookupTemplate("SideNav")), "\n    ", HTML.MAIN({
    "class": "main-layout"                                                                           // 6
  }, "\n      ", Blaze._TemplateWith(function() {                                                    // 7
    return {                                                                                         // 8
      template: Spacebars.call(view.lookup("main"))                                                  // 9
    };                                                                                               // 10
  }, function() {                                                                                    // 11
    return Spacebars.include(function() {                                                            // 12
      return Spacebars.call(Template.__dynamic);                                                     // 13
    });                                                                                              // 14
  }), "\n    ") ];                                                                                   // 15
}));                                                                                                 // 16
                                                                                                     // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"partials":{"template.Header.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/partials/template.Header.js                                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("Header");                                                                      // 2
Template["Header"] = new Template("Template.Header", (function() {                                   // 3
  var view = this;                                                                                   // 4
  return HTML.HEADER(HTML.Raw('\n      <a href="/"><h1>Ciążowy Organizer <i class="fa fa-heartbeat"></i></h1></a>\n      '), Spacebars.include(view.lookupTemplate("loginButtons")), "\n  ");
}));                                                                                                 // 6
                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SideNav.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/partials/template.SideNav.js                                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("SideNav");                                                                     // 2
Template["SideNav"] = new Template("Template.SideNav", (function() {                                 // 3
  var view = this;                                                                                   // 4
  return HTML.Raw('<nav class="side-nav">\n    <ul>\n      <li><a href="/ksiazka-zadan"><i class="fa fa-book"></i> Książka Zadań </a></li>\n      <li><a href="/zadania-na-dzis"><i class="fa fa-calendar"></i> Zadania Na Dziś </a></li>\n      <li><a href="/lista-czynnosci"><i class="fa fa-list-alt"></i> Lista Czynnosci </a></li>\n      <li><a href="/zadania-wykonane"><i class="fa fa-check-square-o"></i> Zadania Wykonane </a></li>\n    </ul>\n  </nav>');
}));                                                                                                 // 6
                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"zadania":{"template.NoweZadanie.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/template.NoweZadanie.js                                                            //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("NoweZadanie");                                                                 // 2
Template["NoweZadanie"] = new Template("Template.NoweZadanie", (function() {                         // 3
  var view = this;                                                                                   // 4
  return HTML.DIV({                                                                                  // 5
    "class": "nowe-zadanie-container"                                                                // 6
  }, HTML.Raw('\n    <i class="fa fa-close"></i>\n    '), Blaze._TemplateWith(function() {           // 7
    return {                                                                                         // 8
      collection: Spacebars.call("Zadania"),                                                         // 9
      id: Spacebars.call("insertZadanieForm"),                                                       // 10
      type: Spacebars.call("insert"),                                                                // 11
      "class": Spacebars.call("nowe-zadanie-form")                                                   // 12
    };                                                                                               // 13
  }, function() {                                                                                    // 14
    return Spacebars.include(view.lookupTemplate("quickForm"));                                      // 15
  }), "\n  ");                                                                                       // 16
}));                                                                                                 // 17
                                                                                                     // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.PojedynczeZadanie.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/template.PojedynczeZadanie.js                                                      //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("PojedynczeZadanie");                                                           // 2
Template["PojedynczeZadanie"] = new Template("Template.PojedynczeZadanie", (function() {             // 3
  var view = this;                                                                                   // 4
  return HTML.DIV({                                                                                  // 5
    "class": "lista-zadan"                                                                           // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:zadanie.nazwa", function() {                               // 7
    return Spacebars.mustache(Spacebars.dot(view.lookup("zadanie"), "nazwa"));                       // 8
  })), "\n    ", HTML.P(Blaze.View("lookup:zadanie.opis", function() {                               // 9
    return Spacebars.mustache(Spacebars.dot(view.lookup("zadanie"), "opis"));                        // 10
  })), "\n    ", Blaze.Each(function() {                                                             // 11
    return Spacebars.call(Spacebars.dot(view.lookup("zadanie"), "czynnosci"));                       // 12
  }, function() {                                                                                    // 13
    return [ "\n      ", HTML.SPAN({                                                                 // 14
      "class": "czynnosc"                                                                            // 15
    }, Blaze.View("lookup:nazwa", function() {                                                       // 16
      return Spacebars.mustache(view.lookup("nazwa"));                                               // 17
    }), " - ", Blaze.View("lookup:opis", function() {                                                // 18
      return Spacebars.mustache(view.lookup("opis"));                                                // 19
    })), "\n    " ];                                                                                 // 20
  }), "\n  ");                                                                                       // 21
}));                                                                                                 // 22
                                                                                                     // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Zadania.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/template.Zadania.js                                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("Zadania");                                                                     // 2
Template["Zadania"] = new Template("Template.Zadania", (function() {                                 // 3
  var view = this;                                                                                   // 4
  return [ Blaze.If(function() {                                                                     // 5
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "noweZadanie");
  }, function() {                                                                                    // 7
    return [ "\n    ", Spacebars.include(view.lookupTemplate("NoweZadanie")), "\n  " ];              // 8
  }, function() {                                                                                    // 9
    return [ "\n    ", HTML.BUTTON({                                                                 // 10
      "class": "nowe-zadanie"                                                                        // 11
    }, "Nowe Zadanie"), "\n  " ];                                                                    // 12
  }), "\n  ", HTML.SECTION({                                                                         // 13
    "class": "zadania"                                                                               // 14
  }, "\n    ", Blaze.If(function() {                                                                 // 15
    return Spacebars.call(view.templateInstance().subscriptionsReady());                             // 16
  }, function() {                                                                                    // 17
    return [ "\n      ", Blaze.Each(function() {                                                     // 18
      return Spacebars.call(view.lookup("zadania"));                                                 // 19
    }, function() {                                                                                  // 20
      return [ "\n        ", Spacebars.include(view.lookupTemplate("Zadanie")), "\n      " ];        // 21
    }), "\n    " ];                                                                                  // 22
  }, function() {                                                                                    // 23
    return [ "\n      ", HTML.P("Loading"), "\n    " ];                                              // 24
  }), "\n  ") ];                                                                                     // 25
}));                                                                                                 // 26
                                                                                                     // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Zadanie.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/template.Zadanie.js                                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("Zadanie");                                                                     // 2
Template["Zadanie"] = new Template("Template.Zadanie", (function() {                                 // 3
  var view = this;                                                                                   // 4
  return HTML.ARTICLE({                                                                              // 5
    "class": function() {                                                                            // 6
      return [ "zadanie ", Blaze.If(function() {                                                     // 7
        return Spacebars.call(view.lookup("wLiscieZadan"));                                          // 8
      }, function() {                                                                                // 9
        return "na-liscie";                                                                          // 10
      }), Blaze.If(function() {                                                                      // 11
        return Spacebars.call(view.lookup("zadaniaWykonane"));                                       // 12
      }, function() {                                                                                // 13
        return "wykonane";                                                                           // 14
      }) ];                                                                                          // 15
    }                                                                                                // 16
  }, "\n    ", HTML.H3(Blaze.View("lookup:nazwa", function() {                                       // 17
    return Spacebars.mustache(view.lookup("nazwa"));                                                 // 18
  })), "\n    ", Blaze.If(function() {                                                               // 19
    return Spacebars.call(view.lookup("editMode"));                                                  // 20
  }, function() {                                                                                    // 21
    return [ "\n      ", Blaze._TemplateWith(function() {                                            // 22
      return {                                                                                       // 23
        collection: Spacebars.call("Zadania"),                                                       // 24
        id: Spacebars.call(view.lookup("updateZadanieId")),                                          // 25
        type: Spacebars.call("update"),                                                              // 26
        doc: Spacebars.call(view.lookup(".")),                                                       // 27
        autosave: Spacebars.call(true)                                                               // 28
      };                                                                                             // 29
    }, function() {                                                                                  // 30
      return Spacebars.include(view.lookupTemplate("quickForm"));                                    // 31
    }), "\n    " ];                                                                                  // 32
  }, function() {                                                                                    // 33
    return [ "\n      ", HTML.P(Blaze.View("lookup:opis", function() {                               // 34
      return Spacebars.mustache(view.lookup("opis"));                                                // 35
    })), "\n      ", HTML.P("\n        ", Blaze.Each(function() {                                    // 36
      return Spacebars.call(view.lookup("czynnosci"));                                               // 37
    }, function() {                                                                                  // 38
      return [ "\n          ", HTML.SPAN({                                                           // 39
        "class": "czynnosc"                                                                          // 40
      }, Blaze.View("lookup:nazwa", function() {                                                     // 41
        return Spacebars.mustache(view.lookup("nazwa"));                                             // 42
      }), " - ", Blaze.View("lookup:opis", function() {                                              // 43
        return Spacebars.mustache(view.lookup("opis"));                                              // 44
      })), "\n        " ];                                                                           // 45
    }), "\n      "), "\n      ", HTML.DIV({                                                          // 46
      "class": "buttons"                                                                             // 47
    }, "\n        ", HTML.DIV({                                                                      // 48
      "class": "left",                                                                               // 49
      align: "left"                                                                                  // 50
    }, "\n          ", Blaze.If(function() {                                                         // 51
      return Spacebars.call(view.lookup("wLiscieZadan"));                                            // 52
    }, function() {                                                                                  // 53
      return [ "\n            ", HTML.BUTTON({                                                       // 54
        "class": "btn-deny toggle-lista-zadan"                                                       // 55
      }, "Usuń Z Listy Zadań"), "\n          " ];                                                    // 56
    }, function() {                                                                                  // 57
      return [ "\n            ", HTML.BUTTON({                                                       // 58
        "class": "btn-primary toggle-lista-zadan"                                                    // 59
      }, "Dodaj Do Listy Zadań"), "\n          " ];                                                  // 60
    }), "\n        "), "\n        ", HTML.DIV({                                                      // 61
      "class": "right",                                                                              // 62
      align: "right"                                                                                 // 63
    }, "\n          ", Blaze.If(function() {                                                         // 64
      return Spacebars.call(view.lookup("zadaniaWykonane"));                                         // 65
    }, function() {                                                                                  // 66
      return [ "\n            ", HTML.BUTTON({                                                       // 67
        "class": "btn-deny toggle-zadania-wykonane"                                                  // 68
      }, "Usuń Z Listy Wykonanych"), "\n          " ];                                               // 69
    }, function() {                                                                                  // 70
      return [ "\n            ", HTML.BUTTON({                                                       // 71
        "class": "btn-primary toggle-zadania-wykonane"                                               // 72
      }, "Dodaj Do Listy Wykonanych"), "\n          " ];                                             // 73
    }), "\n        "), "\n      "), "\n    " ];                                                      // 74
  }), HTML.Raw('\n    <i class="fa fa-pencil"></i>\n    <i class="fa fa-trash"></i>\n  '));          // 75
}));                                                                                                 // 76
                                                                                                     // 77
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"NoweZadania.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/NoweZadania.js                                                                     //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.NoweZadanie.events({                                                                        // 1
  'click .fa-close': function () {                                                                   // 2
    function clickFaClose() {                                                                        // 2
      Session.set('noweZadanie', false);                                                             // 3
    }                                                                                                // 4
                                                                                                     //
    return clickFaClose;                                                                             // 2
  }()                                                                                                // 2
});                                                                                                  // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"PojedynczeZadanie.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/PojedynczeZadanie.js                                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.PojedynczeZadanie.onCreated(function () {                                                   // 1
  var self = this;                                                                                   // 2
  self.autorun(function () {                                                                         // 3
    var id = FlowRouter.getParam('id');                                                              // 4
    self.subscribe('pojedynczeZadanie', id);                                                         // 5
  });                                                                                                // 6
});                                                                                                  // 7
                                                                                                     //
Template.PojedynczeZadanie.helpers({                                                                 // 9
  zadanie: function () {                                                                             // 10
    function zadanie() {                                                                             // 10
      var id = FlowRouter.getParam('id');                                                            // 11
      return Zadania.findOne({ _id: id });                                                           // 12
    }                                                                                                // 13
                                                                                                     //
    return zadanie;                                                                                  // 10
  }()                                                                                                // 10
});                                                                                                  // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"Zadania.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/Zadania.js                                                                         //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.Zadania.onCreated(function () {                                                             // 1
  var self = this;                                                                                   // 2
  self.autorun(function () {                                                                         // 3
    self.subscribe('zadania');                                                                       // 4
  });                                                                                                // 5
});                                                                                                  // 6
                                                                                                     //
Template.Zadania.helpers({                                                                           // 8
  zadania: function () {                                                                             // 9
    function zadania() {                                                                             // 9
      return Zadania.find({});                                                                       // 10
    }                                                                                                // 11
                                                                                                     //
    return zadania;                                                                                  // 9
  }()                                                                                                // 9
});                                                                                                  // 8
                                                                                                     //
Template.Zadania.events({                                                                            // 14
  'click .nowe-zadanie': function () {                                                               // 15
    function clickNoweZadanie() {                                                                    // 15
      Session.set('noweZadanie', true);                                                              // 16
    }                                                                                                // 17
                                                                                                     //
    return clickNoweZadanie;                                                                         // 15
  }()                                                                                                // 15
});                                                                                                  // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"Zadanie.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/zadania/Zadanie.js                                                                         //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.Zadanie.onCreated(function () {                                                             // 1
  this.editMode = new ReactiveVar(false);                                                            // 2
});                                                                                                  // 3
                                                                                                     //
Template.Zadanie.helpers({                                                                           // 5
  updateZadanieId: function () {                                                                     // 6
    function updateZadanieId() {                                                                     // 6
      return this._id;                                                                               // 7
    }                                                                                                // 8
                                                                                                     //
    return updateZadanieId;                                                                          // 6
  }(),                                                                                               // 6
  editMode: function () {                                                                            // 9
    function editMode() {                                                                            // 9
      return Template.instance().editMode.get();                                                     // 10
    }                                                                                                // 11
                                                                                                     //
    return editMode;                                                                                 // 9
  }()                                                                                                // 9
});                                                                                                  // 5
                                                                                                     //
Template.Zadanie.events({                                                                            // 14
  'click .toggle-lista-zadan': function () {                                                         // 15
    function clickToggleListaZadan() {                                                               // 15
      Meteor.call('toggleListaZadan', this._id, this.wLiscieZadan);                                  // 16
    }                                                                                                // 17
                                                                                                     //
    return clickToggleListaZadan;                                                                    // 15
  }(),                                                                                               // 15
  'click .toggle-zadania-wykonane': function () {                                                    // 18
    function clickToggleZadaniaWykonane() {                                                          // 18
      Meteor.call('toggleZadaniaWykonane', this._id, this.zadaniaWykonane);                          // 19
    }                                                                                                // 20
                                                                                                     //
    return clickToggleZadaniaWykonane;                                                               // 18
  }(),                                                                                               // 18
  'click .fa-trash': function () {                                                                   // 21
    function clickFaTrash() {                                                                        // 21
      Meteor.call('deleteZadanie', this._id);                                                        // 22
    }                                                                                                // 23
                                                                                                     //
    return clickFaTrash;                                                                             // 21
  }(),                                                                                               // 21
  'click .fa-pencil': function () {                                                                  // 24
    function clickFaPencil(event, template) {                                                        // 24
      template.editMode.set(!template.editMode.get());                                               // 25
    }                                                                                                // 26
                                                                                                     //
    return clickFaPencil;                                                                            // 24
  }()                                                                                                // 24
});                                                                                                  // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.ListaCzynnosci.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/template.ListaCzynnosci.js                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("ListaCzynnosci");                                                              // 2
Template["ListaCzynnosci"] = new Template("Template.ListaCzynnosci", (function() {                   // 3
  var view = this;                                                                                   // 4
  return [ HTML.Raw('<h1 class="page-title">Moja Lista Czynności</h1>\n  '), HTML.UL({               // 5
    "class": "lista-czynnosci"                                                                       // 6
  }, "\n    ", Blaze.Each(function() {                                                               // 7
    return Spacebars.call(view.lookup("listaCzynnosci"));                                            // 8
  }, function() {                                                                                    // 9
    return [ "\n      ", Blaze.Each(function() {                                                     // 10
      return Spacebars.call(view.lookup("czynnosci"));                                               // 11
    }, function() {                                                                                  // 12
      return [ "\n        ", HTML.LI(Blaze.View("lookup:nazwa", function() {                         // 13
        return Spacebars.mustache(view.lookup("nazwa"));                                             // 14
      }), " - ", HTML.SPAN({                                                                         // 15
        "class": "opis"                                                                              // 16
      }, Blaze.View("lookup:opis", function() {                                                      // 17
        return Spacebars.mustache(view.lookup("opis"));                                              // 18
      }))), "\n      " ];                                                                            // 19
    }), "\n    " ];                                                                                  // 20
  }, function() {                                                                                    // 21
    return [ "\n      ", HTML.P("Proszę dodać ", HTML.A({                                            // 22
      href: "/ksiazka-zadan"                                                                         // 23
    }, "zadania"), " do wykonania."), "\n    " ];                                                    // 24
  }), "\n  ") ];                                                                                     // 25
}));                                                                                                 // 26
                                                                                                     // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ZadaniaNaDzis.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/template.ZadaniaNaDzis.js                                                                  //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("ZadaniaNaDzis");                                                               // 2
Template["ZadaniaNaDzis"] = new Template("Template.ZadaniaNaDzis", (function() {                     // 3
  var view = this;                                                                                   // 4
  return [ HTML.Raw('<h1 class="page-title">Zadania na Dzis</h1>\n\n    '), Blaze.Each(function() {  // 5
    return Spacebars.call(view.lookup("zadania"));                                                   // 6
  }, function() {                                                                                    // 7
    return [ "\n      ", Spacebars.include(view.lookupTemplate("ListaZadan")), "\n    " ];           // 8
  }, function() {                                                                                    // 9
    return [ "\n    ", HTML.DIV({                                                                    // 10
      "class": "informacja"                                                                          // 11
    }, "\n      ", HTML.P("Proszę dodać ", HTML.A({                                                  // 12
      href: "/ksiazka-zadan"                                                                         // 13
    }, "zadania"), " do wykonania."), "\n    "), "\n    " ];                                         // 14
  }) ];                                                                                              // 15
}));                                                                                                 // 16
                                                                                                     // 17
Template.__checkName("ListaZadan");                                                                  // 18
Template["ListaZadan"] = new Template("Template.ListaZadan", (function() {                           // 19
  var view = this;                                                                                   // 20
  return HTML.DIV({                                                                                  // 21
    "class": "lista-zadan"                                                                           // 22
  }, "\n    ", HTML.H3(Blaze.View("lookup:nazwa", function() {                                       // 23
    return Spacebars.mustache(view.lookup("nazwa"));                                                 // 24
  })), "\n    ", HTML.P(Blaze.View("lookup:opis", function() {                                       // 25
    return Spacebars.mustache(view.lookup("opis"));                                                  // 26
  })), "\n    ", HTML.A({                                                                            // 27
    href: function() {                                                                               // 28
      return [ "/zadanie/", Spacebars.mustache(view.lookup("_id")) ];                                // 29
    }                                                                                                // 30
  }, "Szczegóły"), "\n  ");                                                                          // 31
}));                                                                                                 // 32
                                                                                                     // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ZadaniaWykonane.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/template.ZadaniaWykonane.js                                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("ZadaniaWykonane");                                                             // 2
Template["ZadaniaWykonane"] = new Template("Template.ZadaniaWykonane", (function() {                 // 3
  var view = this;                                                                                   // 4
  return [ HTML.Raw('<h1 class="page-title">Zadania Wykonane</h1>\n\n    '), Blaze.Each(function() {
    return Spacebars.call(view.lookup("zadania"));                                                   // 6
  }, function() {                                                                                    // 7
    return [ "\n      ", Spacebars.include(view.lookupTemplate("ListaZadanWykonanych")), "\n    " ];
  }, function() {                                                                                    // 9
    return [ "\n    ", HTML.DIV({                                                                    // 10
      "class": "informacja"                                                                          // 11
    }, "\n      ", HTML.P("Żadne ", HTML.A({                                                         // 12
      href: "/ksiazka-zadan"                                                                         // 13
    }, "zadanie"), " jak do tej pory nie zostało wykonane."), "\n    "), "\n    " ];                 // 14
  }) ];                                                                                              // 15
}));                                                                                                 // 16
                                                                                                     // 17
Template.__checkName("ListaZadanWykonanych");                                                        // 18
Template["ListaZadanWykonanych"] = new Template("Template.ListaZadanWykonanych", (function() {       // 19
  var view = this;                                                                                   // 20
  return HTML.DIV({                                                                                  // 21
    "class": "lista-zadan"                                                                           // 22
  }, "\n    ", HTML.H3(Blaze.View("lookup:nazwa", function() {                                       // 23
    return Spacebars.mustache(view.lookup("nazwa"));                                                 // 24
  })), "\n    ", HTML.P(Blaze.View("lookup:opis", function() {                                       // 25
    return Spacebars.mustache(view.lookup("opis"));                                                  // 26
  })), "\n  ");                                                                                      // 27
}));                                                                                                 // 28
                                                                                                     // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"ListaCzynnosci.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/ListaCzynnosci.js                                                                          //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.ListaCzynnosci.onCreated(function () {                                                      // 1
  var self = this;                                                                                   // 2
  self.autorun(function () {                                                                         // 3
    self.subscribe('zadania');                                                                       // 4
  });                                                                                                // 5
});                                                                                                  // 6
                                                                                                     //
Template.ListaCzynnosci.helpers({                                                                    // 8
  listaCzynnosci: function () {                                                                      // 9
    function listaCzynnosci() {                                                                      // 9
      return Zadania.find({ wLiscieZadan: true });                                                   // 10
    }                                                                                                // 11
                                                                                                     //
    return listaCzynnosci;                                                                           // 9
  }()                                                                                                // 9
});                                                                                                  // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"ZadaniaNaDzis.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/ZadaniaNaDzis.js                                                                           //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.ZadaniaNaDzis.onCreated(function () {                                                       // 1
  var self = this;                                                                                   // 2
  self.autorun(function () {                                                                         // 3
    self.subscribe('zadania');                                                                       // 4
  });                                                                                                // 5
});                                                                                                  // 6
                                                                                                     //
Template.ZadaniaNaDzis.helpers({                                                                     // 8
  zadania: function () {                                                                             // 9
    function zadania() {                                                                             // 9
      return Zadania.find({ wLiscieZadan: true });                                                   // 10
    }                                                                                                // 11
                                                                                                     //
    return zadania;                                                                                  // 9
  }()                                                                                                // 9
});                                                                                                  // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"ZadaniaWykonane.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/ZadaniaWykonane.js                                                                         //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Template.ZadaniaWykonane.onCreated(function () {                                                     // 1
  var self = this;                                                                                   // 2
  self.autorun(function () {                                                                         // 3
    self.subscribe('zadania');                                                                       // 4
  });                                                                                                // 5
});                                                                                                  // 6
                                                                                                     //
Template.ZadaniaWykonane.helpers({                                                                   // 8
  zadania: function () {                                                                             // 9
    function zadania() {                                                                             // 9
      return Zadania.find({ zadaniaWykonane: true });                                                // 10
    }                                                                                                // 11
                                                                                                     //
    return zadania;                                                                                  // 9
  }()                                                                                                // 9
});                                                                                                  // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// client/main.js                                                                                    //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./main.html');
                                                                                                     // 2
                                                                                                     //
                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"lib":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/routes.js                                                                                     //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
if (Meteor.isClient) {                                                                               // 1
  Accounts.onLogin(function () {                                                                     // 2
    FlowRouter.go('ksiazka-zadan');                                                                  // 3
  });                                                                                                // 4
                                                                                                     //
  Accounts.onLogout(function () {                                                                    // 6
    FlowRouter.go('home');                                                                           // 7
  });                                                                                                // 8
}                                                                                                    // 9
                                                                                                     //
FlowRouter.triggers.enter([function (context, redirect) {                                            // 11
  if (!Meteor.userId()) {                                                                            // 12
    FlowRouter.go('home');                                                                           // 13
  }                                                                                                  // 14
}]);                                                                                                 // 15
                                                                                                     //
FlowRouter.route('/', {                                                                              // 17
  name: 'home',                                                                                      // 18
  action: function () {                                                                              // 19
    function action() {                                                                              // 17
      if (Meteor.userId()) {                                                                         // 20
        FlowRouter.go('ksiazka-zadan');                                                              // 21
      }                                                                                              // 22
      BlazeLayout.render('HomeLayout');                                                              // 23
    }                                                                                                // 24
                                                                                                     //
    return action;                                                                                   // 17
  }()                                                                                                // 17
});                                                                                                  // 17
                                                                                                     //
FlowRouter.route('/ksiazka-zadan', {                                                                 // 27
  name: 'ksiazka-zadan',                                                                             // 28
  action: function () {                                                                              // 29
    function action() {                                                                              // 27
      BlazeLayout.render('MainLayout', { main: 'Zadania' });                                         // 30
    }                                                                                                // 31
                                                                                                     //
    return action;                                                                                   // 27
  }()                                                                                                // 27
});                                                                                                  // 27
                                                                                                     //
FlowRouter.route('/zadanie/:id', {                                                                   // 34
  name: 'zadanie',                                                                                   // 35
  action: function () {                                                                              // 36
    function action() {                                                                              // 34
      BlazeLayout.render('MainLayout', { main: 'PojedynczeZadanie' });                               // 37
    }                                                                                                // 38
                                                                                                     //
    return action;                                                                                   // 34
  }()                                                                                                // 34
});                                                                                                  // 34
                                                                                                     //
FlowRouter.route('/zadania-na-dzis', {                                                               // 41
  name: 'zadania-na-dzis',                                                                           // 42
  action: function () {                                                                              // 43
    function action() {                                                                              // 41
      BlazeLayout.render('MainLayout', { main: 'ZadaniaNaDzis' });                                   // 44
    }                                                                                                // 45
                                                                                                     //
    return action;                                                                                   // 41
  }()                                                                                                // 41
});                                                                                                  // 41
                                                                                                     //
FlowRouter.route('/lista-czynnosci', {                                                               // 48
  name: 'lista-czynnosci',                                                                           // 49
  action: function () {                                                                              // 50
    function action() {                                                                              // 48
      BlazeLayout.render('MainLayout', { main: 'ListaCzynnosci' });                                  // 51
    }                                                                                                // 52
                                                                                                     //
    return action;                                                                                   // 48
  }()                                                                                                // 48
});                                                                                                  // 48
                                                                                                     //
FlowRouter.route('/zadania-wykonane', {                                                              // 55
  name: 'zadania-wykonane',                                                                          // 56
  action: function () {                                                                              // 57
    function action() {                                                                              // 55
      BlazeLayout.render('MainLayout', { main: 'ZadaniaWykonane' });                                 // 58
    }                                                                                                // 59
                                                                                                     //
    return action;                                                                                   // 55
  }()                                                                                                // 55
});                                                                                                  // 55
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"Zadania.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// collections/Zadania.js                                                                            //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Zadania = new Mongo.Collection('zadania');                                                           // 1
                                                                                                     //
Zadania.allow({                                                                                      // 3
  insert: function () {                                                                              // 4
    function insert(userId, doc) {                                                                   // 4
      return !!userId;                                                                               // 5
    }                                                                                                // 6
                                                                                                     //
    return insert;                                                                                   // 4
  }(),                                                                                               // 4
  update: function () {                                                                              // 7
    function update(userId, doc) {                                                                   // 7
      return !!userId;                                                                               // 8
    }                                                                                                // 9
                                                                                                     //
    return update;                                                                                   // 7
  }()                                                                                                // 7
});                                                                                                  // 3
                                                                                                     //
Czynnosc = new SimpleSchema({                                                                        // 12
  nazwa: {                                                                                           // 13
    type: String                                                                                     // 14
  },                                                                                                 // 13
  opis: {                                                                                            // 16
    type: String                                                                                     // 17
  }                                                                                                  // 16
});                                                                                                  // 12
                                                                                                     //
Zadanie = new SimpleSchema({                                                                         // 21
  nazwa: {                                                                                           // 22
    type: String,                                                                                    // 23
    label: "Nazwa"                                                                                   // 24
  },                                                                                                 // 22
  opis: {                                                                                            // 26
    type: String,                                                                                    // 27
    label: "Opis"                                                                                    // 28
  },                                                                                                 // 26
  czynnosci: {                                                                                       // 30
    type: [Czynnosc]                                                                                 // 31
  },                                                                                                 // 30
  wLiscieZadan: {                                                                                    // 33
    type: Boolean,                                                                                   // 34
    defaultValue: false,                                                                             // 35
    optional: true,                                                                                  // 36
    autoform: {                                                                                      // 37
      type: "hidden"                                                                                 // 38
    }                                                                                                // 37
  },                                                                                                 // 33
  zadaniaWykonane: {                                                                                 // 41
    type: Boolean,                                                                                   // 42
    defaultValue: false,                                                                             // 43
    optional: true,                                                                                  // 44
    autoform: {                                                                                      // 45
      type: "hidden"                                                                                 // 46
    }                                                                                                // 45
  },                                                                                                 // 41
  autor: {                                                                                           // 49
    type: String,                                                                                    // 50
    label: "Autor",                                                                                  // 51
    autoValue: function () {                                                                         // 52
      function autoValue() {                                                                         // 52
        return this.userId;                                                                          // 53
      }                                                                                              // 54
                                                                                                     //
      return autoValue;                                                                              // 52
    }(),                                                                                             // 52
    autoform: {                                                                                      // 55
      type: "hidden"                                                                                 // 56
    }                                                                                                // 55
  },                                                                                                 // 49
  createAt: {                                                                                        // 59
    type: Date,                                                                                      // 60
    label: "Created At",                                                                             // 61
    autoValue: function () {                                                                         // 62
      function autoValue() {                                                                         // 62
        return new Date();                                                                           // 63
      }                                                                                              // 64
                                                                                                     //
      return autoValue;                                                                              // 62
    }(),                                                                                             // 62
    autoform: {                                                                                      // 65
      type: "hidden"                                                                                 // 66
    }                                                                                                // 65
  }                                                                                                  // 59
});                                                                                                  // 21
                                                                                                     //
Meteor.methods({                                                                                     // 71
  toggleListaZadan: function () {                                                                    // 72
    function toggleListaZadan(id, currentState) {                                                    // 72
      Zadania.update(id, {                                                                           // 73
        $set: {                                                                                      // 74
          wLiscieZadan: !currentState,                                                               // 75
          zadaniaWykonane: false                                                                     // 76
        }                                                                                            // 74
      });                                                                                            // 73
    }                                                                                                // 79
                                                                                                     //
    return toggleListaZadan;                                                                         // 72
  }(),                                                                                               // 72
  toggleZadaniaWykonane: function () {                                                               // 80
    function toggleZadaniaWykonane(id, currentState) {                                               // 80
      Zadania.update(id, {                                                                           // 81
        $set: {                                                                                      // 82
          zadaniaWykonane: !currentState,                                                            // 83
          wLiscieZadan: false                                                                        // 84
        }                                                                                            // 82
      });                                                                                            // 81
    }                                                                                                // 87
                                                                                                     //
    return toggleZadaniaWykonane;                                                                    // 80
  }(),                                                                                               // 80
  deleteZadanie: function () {                                                                       // 88
    function deleteZadanie(id) {                                                                     // 88
      Zadania.remove(id);                                                                            // 89
    }                                                                                                // 90
                                                                                                     //
    return deleteZadanie;                                                                            // 88
  }()                                                                                                // 88
});                                                                                                  // 71
                                                                                                     //
Zadania.attachSchema(Zadanie);                                                                       // 93
///////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/layouts/template.MainLayout.js");
require("./client/partials/template.Header.js");
require("./client/partials/template.SideNav.js");
require("./client/zadania/template.NoweZadanie.js");
require("./client/zadania/template.PojedynczeZadanie.js");
require("./client/zadania/template.Zadania.js");
require("./client/zadania/template.Zadanie.js");
require("./client/template.ListaCzynnosci.js");
require("./client/template.ZadaniaNaDzis.js");
require("./client/template.ZadaniaWykonane.js");
require("./lib/routes.js");
require("./client/zadania/NoweZadania.js");
require("./client/zadania/PojedynczeZadanie.js");
require("./client/zadania/Zadania.js");
require("./client/zadania/Zadanie.js");
require("./client/ListaCzynnosci.js");
require("./client/ZadaniaNaDzis.js");
require("./client/ZadaniaWykonane.js");
require("./collections/Zadania.js");
require("./client/main.js");
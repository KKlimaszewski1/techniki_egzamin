if (Meteor.isClient){
  Accounts.onLogin(function(){
    FlowRouter.go('ksiazka-zadan');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('ksiazka-zadan')
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/ksiazka-zadan', {
  name: 'ksiazka-zadan',
  action (){
    BlazeLayout.render('MainLayout', {main: 'Zadania'});
  }
});

FlowRouter.route('/zadanie/:id', {
  name: 'zadanie',
  action (){
    BlazeLayout.render('MainLayout', {main: 'PojedynczeZadanie'});
  }
});

FlowRouter.route('/zadania-na-dzis', {
  name: 'zadania-na-dzis',
  action(){
    BlazeLayout.render('MainLayout', {main: 'ZadaniaNaDzis'});
  }
});

FlowRouter.route('/lista-czynnosci', {
  name: 'lista-czynnosci',
  action(){
    BlazeLayout.render('MainLayout', {main: 'ListaCzynnosci'});
  }
});

FlowRouter.route('/zadania-wykonane', {
  name: 'zadania-wykonane',
  action(){
    BlazeLayout.render('MainLayout', {main: 'ZadaniaWykonane'});
  }
});

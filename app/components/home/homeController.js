// app.controller('HomeController',  function(){
//   this.title = "Haute Dogue" ;
//
// });

var HomeController = function($scope){
  //this.title = "hello"
};


HomeController.$inject = ['$scope'];

app.controller('HomeController', HomeController);

var HeaderController = function($scope){
  this.title = "oh hi ";
};

HeaderController.inject = ['$scope'];

app.controller('HeaderController', HeaderController);

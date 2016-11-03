var HeaderController = function($scope){
  this.title = "Haute Dogue";

  this.links = [
    "Home",
    "Outfits",
    "Accessories",
    "About",
    "Contact"
  ];

};

HeaderController.inject = ['$scope'];

app.controller('HeaderController', HeaderController);

(function () {
  'use strict';
  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['$http'];
  function CategoriesController($http) {
    var categoriesCtrl = this;
    categoriesCtrl.items = [];

    // Fetch categories from a simple static JSON file or API
    $http.get('categories.json').then(function (response) {
      categoriesCtrl.items = response.data;
    });
  }
})();

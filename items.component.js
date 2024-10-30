(function () {
  'use strict';
  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$http', '$stateParams'];
  function ItemsController($http, $stateParams) {
    var itemsCtrl = this;
    itemsCtrl.items = [];

    // Fetch items based on categoryId from a simple static JSON file or API
    $http.get('items-' + $stateParams.categoryId + '.json').then(function (response) {
      itemsCtrl.items = response.data;
    });
  }
})();

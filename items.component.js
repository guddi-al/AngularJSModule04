(function () {
  'use strict';
  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuService', '$stateParams'];
  function ItemsController(MenuService, $stateParams) {
    var itemsCtrl = this;
    itemsCtrl.items = [];

    MenuService.getItemsForCategory($stateParams.categoryId).then(function (response) {
      itemsCtrl.items = response;
    });
  }
})();

(function () {
  'use strict';
  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuService'];
  function CategoriesController(MenuService) {
    var categoriesCtrl = this;
    categoriesCtrl.items = [];

    MenuService.getAllCategories().then(function (response) {
      categoriesCtrl.items = response;
    });
  }
})();

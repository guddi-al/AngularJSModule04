(function () {
  'use strict';
  angular.module('MenuApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          items: ['MenuService', function (MenuService) {
            return MenuService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/:categoryId',
        templateUrl: 'items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          items: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
            return MenuService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      });
  });
})();


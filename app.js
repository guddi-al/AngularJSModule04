(function () {
    'use strict';

    angular.module('MenuApp', ['ui.router'])
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'components/categories/categories.template.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    items: ['MenuService', function (MenuService) {
                        return MenuService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{categoryId}',
                templateUrl: 'components/items/items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    items: ['$stateParams', 'MenuService',
                        function ($stateParams, MenuService) {
                            return MenuService.getItemsForCategory($stateParams.categoryId);
                        }]
                }
            });
    }
})();

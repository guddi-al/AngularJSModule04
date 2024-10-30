(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuService', MenuService)
        .constant('ApiBasePath', "");

    MenuService.$inject = ['$http', 'ApiBasePath'];
    function MenuService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: { category: categoryShortName }
            }).then(function (response) {
                return response.data;
            });
        };
    }
})();

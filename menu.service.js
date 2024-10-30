(function () {
  'use strict';
  angular.module('MenuApp')
    .service('MenuService', MenuService);

  function MenuService() {
    var service = this;

    var categories = [
      { id: 1, name: 'Appetizers' },
      { id: 2, name: 'Main Courses' },
      { id: 3, name: 'Desserts' }
    ];

    var items = {
      1: [
        { name: 'Spring Rolls', description: 'Crispy rolls with veggies.' },
        { name: 'Dumplings', description: 'Steamed dumplings with pork.' }
      ],
      2: [
        { name: 'Grilled Salmon', description: 'Salmon with a lemon butter sauce.' },
        { name: 'Steak', description: 'Grilled to perfection.' }
      ],
      3: [
        { name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust.' },
        { name: 'Ice Cream', description: 'Vanilla ice cream with chocolate sauce.' }
      ]
    };

    service.getAllCategories = function () {
      return Promise.resolve(categories);
    };

    service.getItemsForCategory = function (categoryId) {
      return Promise.resolve(items[categoryId]);
    };
  }
})();

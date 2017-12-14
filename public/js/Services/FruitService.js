angular.module('MatchMkrApp.FruitService', [])
.factory('fruitFactory', function ($resource) {
    return $resource(
        '/api/0.1/fruit/:id', {
            id: '@id',
        }, {
            update: {
                method: 'PUT'
            }
        }
    );
});

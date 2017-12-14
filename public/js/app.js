var app = angular.module('MatchMkrApp', ['ngRoute', 'ngResource', 'MatchMkrApp.FruitService', 'MatchMkrApp.UserService', 'MatchMkrApp.LoginController', 'MatchMkrApp.TableController', 'MatchMkrApp.CardController', 'MatchMkrApp.NewAccountController'])
.controller('MainController',  ['$scope', '$http', function ($scope, $http) {
    //State vars initialization
    $scope.loading = true;
    $scope.loggedIn = getCookie('username') != "";
    $scope.fruit={};
    $scope.editing = false;
    $scope.loginPage = true;
    console.log($scope.$parent.newAccount)

    //Go to new account signup
    $scope.newAccountPage = function() {
        $scope.newAccount = true;
        $scope.loginPage = false;
    }

    //Add fruit button handler
    $scope.add_fruit = function(){
        $scope.fruit={};
        $scope.editing = true;

        //Floating label layout fix
        $('.mdl-textfield').removeClass('is-focused');
    };

    //Logout button handler
    $scope.logout = function(e){
        delete_cookie('username');
        location.reload();
    };
}]);

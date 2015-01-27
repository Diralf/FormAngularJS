(function () {
    var module = angular.module('form', ['ui.router', 'formNavbar']);

    module.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/stateNew");

        $stateProvider
                .state('stateNew', {
                    url: "/stateNew",
                    templateUrl: "partials/newadress.html",
                    controller: function ($scope) {
                        $scope.addAddress = function () {
                            console.log("Form is sent! " + $scope.newAddress.firstName);
                            addressList.push($scope.newAddress);
                            $scope.newAddress = {};
                            $scope.formAddress.$setPristine();
                        };
                    }
                })
                .state('stateAll', {
                    url: "/stateAll",
                    templateUrl: "partials/alladress.html",
                    controller: function ($scope) {
                        $scope.addressList = addressList;
                    }
                });
    });

    var addressList = [];
})();



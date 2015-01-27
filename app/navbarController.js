(function () {
    var module = angular.module('formNavbar', []);

    module.controller('navbarController', function ($scope) {
        
        $scope.setTab = function (newValue) {
            $scope.tab = newValue;
        };
        
        $scope.isSet = function (tab) {
            return $scope.tab == tab;
        };
    });
})();



(function () {
    var module = angular.module('form', []);

    module.controller('reviewController', function () {
        this.view = {};
        this.sendForm = function (result) {
            result.request = this.view;
            this.view = {};
        };
    });

    module.controller('resultController', function () {

    });

})();



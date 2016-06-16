'use strict';
module.exports = function (app) {
    angular.module(app)
        .controller('homeController', ['$scope', function (s) {
            s.msg = 'hell world 123. You are crazie';
        }]);
};
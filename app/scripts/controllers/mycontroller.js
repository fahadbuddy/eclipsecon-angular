'use strict';

/**
 * @ngdoc function
 * @name nodeApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the nodeApp
 */
angular.module('nodeApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

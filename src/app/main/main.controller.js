'use strict';

angular.module('ksRealEstate')
  .controller('MainCtrl', function ($scope, realEstateService) {
        $scope.$watch('selected', function (newValue, oldValue) {
            if (newValue && newValue != oldValue) {
                alert('id: ' + newValue);
            }
        });
        realEstateService.gettingList().then(
            function success(result) {
                var arr = [];
                angular.forEach(result, function (value, key) {
                    arr.push({price: value.toJSON().price})
                });
                $scope.realEstates = arr;
            }
        );
  });

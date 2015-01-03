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
          var apartment = {};
          apartment.price = value.toJSON().price;
          apartment.airConditioning = value.toJSON().Air_Conditioning;
          apartment.area = value.toJSON().Area;
          apartment.city = value.toJSON().city;
          apartment.neighborhood = value.toJSON().Neighborhood;
          apartment.propertyType = value.toJSON().Property_Type;
          apartment.houseSize = value.toJSON().House_Size;
          arr.push(apartment);
        });
        $scope.realEstates = arr;
      }
    );
  });

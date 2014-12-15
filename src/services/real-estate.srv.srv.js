angular.module('ksRealEstate.services').
    factory('realEstateService', function($q) {
        var srv = {};

        //return function() {
            srv.gettingList = function() {
                var deferred = $q.defer();

                var RealEstates = Parse.Object.extend("real_estates");
                var queryObject = new Parse.Query(RealEstates);

                queryObject.find({
                    success: function (results) {
                        /*for (var i = 0; i < results.length; i++) {
                            console.log(results[0].serverData);
                        }*/
                        deferred.resolve(results);
                    },
                    error: function (error) {
                        //alert("Error: " + error.code + " " + error.message);
                        deferred.reject(error);
                    }
                });
                return deferred.promise;
                /*return [
                    {id: 1, location: 'Tel-Aviv', price: 1500000, thumbnail: 'assets/real-estates/1.jpg', size: 330, bedrooms: '4'},
                    {id: 2, location: 'Bat-Yam', price: 3570000, thumbnail: 'assets/real-estates/2.jpg', size: 260, bedrooms: '5'},
                    {id: 3, location: 'Rishon Le Zion', price: 5000000, thumbnail: 'assets/real-estates/3.jpg', size: 200, bedrooms: '6'},
                    {id: 4, location: 'Tel-Aviv', price: 2000000, thumbnail: 'assets/real-estates/4.jpg', size: 400, bedrooms: '6'},
                    {id: 5, location: 'Rishon Le Zion', price: 1000000, thumbnail: 'assets/real-estates/5.jpg', size: 350, bedrooms: '6'}
                ];*/
            };

            /*var gettingOne = function(id) {
                switch (id) {
                    case 1:
                        return {id: 1, location: 'Tel-Aviv', price: 1500000, thumbnail: 'assets/real-estates/1.jpg', size: 330, bedrooms: '4'};
                    case 2:
                        return {id: 2, location: 'Bat-Yam', price: 3570000, thumbnail: 'assets/real-estates/2.jpg', size: 260, bedrooms: '5'};
                    case 3:
                        return {id: 3, location: 'Rishon Le Zion', price: 5000000, thumbnail: 'assets/real-estates/3.jpg', size: 200, bedrooms: '6'};
                    case 4:
                        return  {id: 4, location: 'Tel-Aviv', price: 2000000, thumbnail: 'assets/real-estates/4.jpg', size: 400, bedrooms: '6'};
                    case 5:
                        return {id: 5, location: 'Rishon Le Zion', price: 1000000, thumbnail: 'assets/real-estates/5.jpg', size: 350, bedrooms: '6'};
                    default:
                        return {};
                };
            }*/
        //};
        return srv;
    });


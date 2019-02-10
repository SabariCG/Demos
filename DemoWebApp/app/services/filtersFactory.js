app.factory('filtersFactory', function ($http, $rootScope, $q) {
    var filters = {};

    filters.GetTimeZones = function () {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/api/person/timezones'
        }).then(function successCB(data) {
            deferred.resolve(data.data);
        }, function errorCB(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    filters.GetCountries = function () {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/api/person/countries'
        }).then(function successCB(data) {
            deferred.resolve(data.data);
        }, function errorCB(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    filters.GetStates = function () {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/api/person/states'
        }).then(function successCB(data) {
            deferred.resolve(data.data);
        }, function errorCB(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    filters.GetCities = function () {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/api/person/cities'
        }).then(function successCB(data) {
            deferred.resolve(data.data);
        }, function errorCB(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return filters;
});
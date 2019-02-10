app.controller('searchCtrl', function ($scope, $http, $rootScope, filtersFactory) {

    var zonesPromise = filtersFactory.GetTimeZones();

    zonesPromise.then(function (data) {
        $rootScope.RZones = $scope.Zones = data;
    });

    var countriesPromise = filtersFactory.GetCountries();

    countriesPromise.then(function (data) {
        $rootScope.RCountries = $scope.Countries = data;
    });

    var statesPromise = filtersFactory.GetStates();

    statesPromise.then(function (data) {
        $rootScope.RStates = $scope.States = data;
    });

    var citiesPromise = filtersFactory.GetCities();

    citiesPromise.then(function (data) {
        $rootScope.RCities = $scope.Cities = data;
    });

    SetPlaceHolders();

    $scope.OnTimeZoneChange = function () {
        $scope.Countries = [];

        $scope.Countries = $rootScope.RCountries.filter(function (co) {
            return co.TimeZone == $scope.SelectedZone;
        });
    }

    $scope.OnCountryChange = function () {
        $scope.States = [];

        $scope.States = $rootScope.RStates.filter(function (st) {
            return st.Country == $scope.SelectedCountry;
        });
    }

    $scope.OnStateChange = function () {
        $scope.Cities = [];

        $scope.Cities = $rootScope.RCities.filter(function (ci) {
            return ci.State == $scope.SelectedState;
        });
    }

    $scope.OnSearch = function () {
        console.log($scope.SelectedZone);
        console.log($scope.SelectedCountry);
        console.log($scope.SelectedState);
        console.log($scope.SelectedCity);

        $http({
            method: 'POST',
            url: '/api/person/details',
            dataType: 'json',
            data: {
                "TimeZone": $scope.SelectedZone,
                "Country": $scope.SelectedCountry,
                "State": $scope.SelectedState,
                "City": $scope.SelectedCity
            }
        }).then(function successCB(data) {
            $rootScope.$broadcast("ShowPersonDetails", data.data);
        }, function errorCB(data) {
            console.log('error');
            console.log(data);
        });
    }

    $scope.OnReset = function () {
        SetPlaceHolders();

        $scope.SelectedZone = $rootScope.RZones;
        $scope.SelectedCountry = $rootScope.RCountries;
        $scope.SelectedState = $rootScope.RStates;
        $scope.SelectedCity = $rootScope.RCities;
    }

    function SetPlaceHolders() {
        $('#countries').select2({
            placeholder: 'Select Country'
        });

        $('#zones').select2({
            placeholder: 'Select Zone'
        });

        $('#cities').select2({
            placeholder: 'Select City'
        });

        $('#states').select2({
            placeholder: 'Select State'
        });
    }
});
app.controller('searchCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/person/timezones'
    }).then(function successCB(data) {
        console.log('timezones');
        console.log(data.data);
        $scope.Zones = data.data;
    }, function errorCB(data) {
            console.log('error');
            console.log(data);
    });

    //$scope.Countries = [
    //    {
    //        id: 1,
    //        name: 'India'
    //    },
    //    {
    //        id: 2,
    //        name: 'United States'
    //    },
    //    {
    //        id: 3,
    //        name: 'United Kindom'
    //    }];

    $http({
        method: 'GET',
        url: '/api/person/countries'
    }).then(function successCB(data) {
        console.log('countrie');
        console.log(data.data);
        $scope.Countries = data.data;
    }, function errorCB(data) {
        console.log('error');
        console.log(data);
    });

    $('#countries').select2({
        placeholder: 'Select Country'
    });

    //$scope.Zones = [
    //    {
    //        id: 1,
    //        name: 'India zone'
    //    },
    //    {
    //        id: 2,
    //        name: 'America zone'
    //    }];

    $('#zones').select2({
        placeholder: 'Select Zone'
    });

    //$scope.States = [
    //    {
    //        id: 1,
    //        name: 'Tamilnadu'
    //    },
    //    {
    //        id: 2,
    //        name: 'Kerala'
    //    }];

    $http({
        method: 'GET',
        url: '/api/person/states'
    }).then(function successCB(data) {
        console.log('states');
        console.log(data.data);
        $scope.States = data.data;
    }, function errorCB(data) {
        console.log('error');
        console.log(data);
        });

    //$scope.Cities = [
    //    {
    //        id: 1,
    //        name: 'Madurai'
    //    },
    //    {
    //        id: 2,
    //        name: 'Chennai'
    //    }];

    $http({
        method: 'GET',
        url: '/api/person/cities'
    }).then(function successCB(data) {
        console.log('cities');
        console.log(data.data);
        $scope.Cities = data.data;
    }, function errorCB(data) {
        console.log('error');
        console.log(data);
    });

    $('#cities').select2({
        placeholder: 'Select City'
    });

    $('#states').select2({
        placeholder: 'Select State'
    });

    $scope.OnTimeZoneChange = function () {
        console.log('selected zone');
        console.log($scope.SelectedZone);
        var countries = $scope.Countries;
        $scope.Countries = countries.filter(function (co) {
            return co.TimeZone == $scope.SelectedZone;
        });

        console.log($scope.Countries);
    }

    $scope.OnCountryChange = function () {
        console.log('selected country');
        console.log($scope.SelectedCountry);
        var states = $scope.States;
        $scope.States = states.filter(function (st) {
            return st.Country == $scope.SelectedCountry;
        });

        console.log($scope.States);
    }

    $scope.OnStateChange = function () {
        console.log('selected state');
        console.log($scope.SelectedState);
        var cities = $scope.Cities;
        $scope.Cities = cities.filter(function (ci) {
            return ci.State == $scope.SelectedState;
        });

        console.log($scope.Cities);
    }

    $scope.OnSearch = function () {
        console.log($scope.SelectedZone);
        console.log($scope.SelectedCountry);
        console.log($scope.SelectedState);
        console.log($scope.SelectedCity);

        $http({
            method: 'GET',
            url: '/api/person/details',
            data: {
                timeZone: $scope.SelectedZone,
                country: $scope.SelectedCountry,
                state: $scope.SelectedState,
                city: $scope.SelectedCity
            }
        }).then(function successCB(data) {
            console.log('persons');
            console.log(data.data);
            $scope.Cities = data.data;
        }, function errorCB(data) {
            console.log('error');
            console.log(data);
        });
    }

    $scope.OnReset = function () {
        $scope.SelectedZone = '';
        $scope.SelectedCountry = '';
        $scope.SelectedState = '';
        $scope.SelectedCity = '';
    }
});
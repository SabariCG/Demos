app.controller('homeCtrl', function ($scope) {
    $scope.Persons = [
        {
            Name: 'Sabari',
            Age: '28',
            Gender: 'Male',
            Zone: 'India Zone',
            Country: 'India',
            State: 'Tamilnadu',
            City: 'Madurai'
        },
        {
            Name: 'Arjun Konduru',
            Age: '26',
            Gender: 'Male',
            Zone: 'India Zone',
            Country: 'India',
            State: 'Telangana',
            City: 'Hyderabad'
        },
        {
            Name: 'Lakshmi',
            Age: '25',
            Gender: 'Female',
            Zone: 'India Zone',
            Country: 'India',
            State: 'Karnataka',
            City: 'Mysore'
        }
    ];
});
var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {
    //function definition to assign API data to a variable
    display = (info) => {
        $scope.data = info.data;
    };
    //function that is executed at start up to display weather at current location
    myLocation();

    //ENTER key event handler
    $scope.enterHandler = (e, ar) => {
        if (e.keyCode == 13) {
            $scope.getWeather(ar);
        }
    }

    function myLocation() {
        //geolocation API used to determine the current location of the user
        navigator.geolocation.getCurrentPosition((position) => {
            var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude.toPrecision(4) + '&lon=' + position.coords.longitude.toPrecision(4) + '&units=metric&APPID=75500792ea7488c01a878f05c8adf1d9';
            $http.get(url).then((response) => {
                display(response);
            });
        });
    };
    //function executed to get weather at current location
    $scope.local = () => {
        myLocation();
    };

    //function used to display data at the location entered into the input text box
    $scope.getWeather = function (area) {
        $scope.geolocation = '';
        $http.get('https://api.openweathermap.org/data/2.5/weather?q=' + area + '&units=metric&APPID=75500792ea7488c01a878f05c8adf1d9').then(function res(response) {
            display(response);

        }).catch(err => {
            $scope.data = err.data;

        });
    };

});


var app = angular.module('gitTrendingApp', []);

app.controller('MainCtrl', function ($scope, storage) {

  $scope.languages = [];

  storage.get().then(function (langs) {
    $scope.languages = langs;
  });

  $scope.setLangs = function () {
    storage.set($scope.languages).then(function (wat) {
      console.log(wat);
    });
  };


  $scope.appendLanguage = function () {
    $scope.languages.push($scope.current);
    $scope.current = '';
  };

  $scope.removeLanguage = function (index) {
    //TODO: 
    //1. call `storage.rm`
    //2. update UI
  };
});

app.factory('storage', function ($q) {
  return {
    get: function (name) {
      return $q(function (resolve, reject) {
        chrome.storage.sync.get(name, function (result) {
          var langs = Object.keys(result).map(function (value, key) {
            return value;
          });
          resolve(langs);
        });
      });
    },
    set: function (langs) {
      return $q(function (resolve, reject) {

        var payload = langs.reduce(function (soFar, current) {
          soFar[current] = current;
          return soFar;
        }, {});

        chrome.storage.sync.set(payload, function () {
          resolve(payload);
        });
      });
    },
    rm: function (lang) {
      //TODO: implement a method for deleting existing language
    }
  };
});

var app = angular.module('myApp', []);

  app.factory('WebApi', function($http){
    var jsonData = {};
    jsonData.getFeedId = function(callback){
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=14fde2553bd110177323ef7027a4bf23&callback=JSON_CALLBACK')
      .success(function(data){
        callback(data);//jsonpとcallbackでスクリプトにして外部サーバーも読み込める
      })
      .error(function(){
        alert('APIデータ取得失敗');
      })
    }
    return jsonData;


  });

  app.controller('MainController', ['$scope', 'WebApi', function($scope, WebApi){
    WebApi.getFeedId(function(data){
    $scope.items = data.weather;
    });

 }]);


var app2 = angular.module('myApp2', []);

  app2.factory('WebApi', function($http){
    var jsonData = {};
    jsonData.getFeedId = function(callback){
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=ousaka&appid=14fde2553bd110177323ef7027a4bf23&callback=JSON_CALLBACK')
      .success(function(data){
        callback(data);//jsonpとcallbackでスクリプトにして外部サーバーも読み込める
      })
      .error(function(){
        alert('APIデータ取得失敗');
      })
    }
    return jsonData;


  });

  app2.controller('MainController2', ['$scope', 'WebApi', function($scope, WebApi){
    WebApi.getFeedId(function(data){
    $scope.items2 = data.weather;
    });

 }]);

 var app3 = angular.module('myApp3', []);

  app3.factory('WebApi', function($http){
    var jsonData = {};
    jsonData.getFeedId = function(callback){
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=okinawa&appid=14fde2553bd110177323ef7027a4bf23&callback=JSON_CALLBACK')
      .success(function(data){
        callback(data);//jsonpとcallbackでスクリプトにして外部サーバーも読み込める
      })
      .error(function(){
        alert('APIデータ取得失敗');
      })
    }
    return jsonData;


  });

  app3.controller('MainController3', ['$scope', 'WebApi', function($scope, WebApi){
    WebApi.getFeedId(function(data){
    $scope.items3 = data.weather;
    });

 }]); 


 var app4 = angular.module('myApp4', []);

  app4.factory('WebApi', function($http){
    var jsonData = {};
    jsonData.getFeedId = function(callback){
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=hokkaido&appid=14fde2553bd110177323ef7027a4bf23&callback=JSON_CALLBACK')
      .success(function(data){
        callback(data);//jsonpとcallbackでスクリプトにして外部サーバーも読み込める
      })
      .error(function(){
        alert('APIデータ取得失敗');
      })
    }
    return jsonData;


  });

  app4.controller('MainController4', ['$scope', 'WebApi', function($scope, WebApi){
    WebApi.getFeedId(function(data){
    $scope.items4 = data.weather;
    });

 }]); 


 var app5 = angular.module('myApp5', []);

  app5.factory('WebApi', function($http){
    var jsonData = {};
    jsonData.getFeedId = function(callback){
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=fukuoka.jp&appid=14fde2553bd110177323ef7027a4bf23&callback=JSON_CALLBACK')
      .success(function(data){
        callback(data);//jsonpとcallbackでスクリプトにして外部サーバーも読み込める
      })
      .error(function(){
        alert('APIデータ取得失敗');
      })
    }
    return jsonData;


  });

  app5.controller('MainController5', ['$scope', 'WebApi', function($scope, WebApi){
    WebApi.getFeedId(function(data){
    $scope.items5 = data.weather;
    });

 }]); 




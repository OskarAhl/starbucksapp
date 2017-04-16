starApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/map')

    $stateProvider

      .state('home', {
        url:'/map',
        templateUrl: 'app/map/map.html',
        controller: 'mapController'
      })
});

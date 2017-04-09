starApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')

    $stateProvider

      .state('home', {
        url:'/',
        templateUrl: 'app/map/map.html',
        controller: ''
      })
      .state('about', {
        url: '',
        templateUrl: ''
      })
});

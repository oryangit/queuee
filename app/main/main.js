'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'uuid',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail/:id',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/qe.html',
            controller: 'QeCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
      .state('main.create', {
        url: '/create',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/create-qe.html',
            controller: 'CreateQeCtrl as ctrl'
          }
        }
      });
});

'use strict';
var angularController = angular.module('vipmobile.controllers', ['ui-rangeSlider','ui.bootstrap'])
.constant('DOMAIN','http://localhost:8080/java_he_thong_phan_tan');


var app = angular.module('vipmobile', [
	'ui.router',
    'ui-rangeSlider',
    'vipmobile.controllers'
]);


//
// app.run(function ($rootScope, $window, $location) {
// //   Authentication.check();
//
// //   $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
// //   if ((nextRoute.access && nextRoute.access.requiredLogin) && !Authentication.isLogged) {
// //     $location.path("/login");
// //   } else {
// //     if (!Authentication.user) Authentication.user = $window.sessionStorage.user;
// //     if (!Authentication.userRole) Authentication.userRole = $window.sessionStorage.userRole;
// //   }
// // });
//
//         $rootScope.$on('$stateChangeStart',
//             function(evt, toState, toParams, fromState, fromParams) {
//                 // We can prevent this state from completing
//                 evt.preventDefault();
//             });
//
//         $rootScope.$on('$stateChangeSuccess',
//             function(event, toState, toParams, fromState, fromParams){
//
//             });
//
// });
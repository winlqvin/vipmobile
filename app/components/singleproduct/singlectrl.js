/**
 * Created with JetBrains WebStorm.
 * User: LeeSan
 * Date: 12/20/15
 * Time: 9:52 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';


angularController
    .controller('SingleCtrl', ['$scope', '$http','$stateParams','ProductService',
    function($scope, $http,$stateParams, productService) {

    productService.getProduct($stateParams.id).then(function(data){
        $scope.selectProduct = data;
    });


}]);

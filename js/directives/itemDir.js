angular.module('assessment')
  .directive('shopItem',function(){

    return {
      restrict: 'E',
      templateUrl: './../views/product-tmpl.html',
      controller: 'productDetailsCtrl'

    }
  })

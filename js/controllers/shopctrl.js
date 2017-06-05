angular.module('assessment')
  .controller('shopCtrl',function($scope,shopService,$stateParams){

$scope.test = 'this is a test'

$scope.getProducts = function(){
  shopService.getProducts().then(function(response){
    console.log(response);
    $scope.productsArr = response.data;

  })
}
$scope.getProducts();



  })

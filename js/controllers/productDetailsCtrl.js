angular.module('assessment')
  .controller('productDetailsCtrl',function($scope,shopService,$stateParams){

$scope.test = 'testing';
$scope.itemId = $stateParams.id;
console.log($scope.itemId);

$scope.getsingleItem = function(){
  shopService.getItem($scope.itemId).then(function(response){
  $scope.singleItem = response.data;

  })
}
$scope.getsingleItem();


  })

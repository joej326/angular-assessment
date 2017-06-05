angular.module('assessment')
  .service('shopService',function($http){

this.getProducts = function(){
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/products/'
    })
}

this.getItem = function(id){
  return $http.get('https://practiceapi.devmountain.com/products/' + id);
}

  })

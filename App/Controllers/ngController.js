app.controller("ngController", function($scope, $rootScope, $location, ngService){

	$scope.m = ngService;

	$rootScope.redirect = function(route){
		$location.path(route);
	};
});
var app = angular.module("NGMASTERS", ["ngRoute"]);

app.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.config(function($routeProvider){

	$routeProvider.when("/Exercicio1", {
		controller: "ngController",
		templateUrl: "App/Views/ex1.html"
	});

	$routeProvider.when("/Exercicio2", {
		controller: "ngController",
			templateUrl: "App/Views/ex2.html"
	});

	$routeProvider.otherwise({ redirectTo: "/Exercicio2"})
});
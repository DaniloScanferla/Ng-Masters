/* Comparando com ASP.NET o Angular eh um framework MVC !
 * Temos Controllers, Views e um arquivo de inicializaçao
 * (Rotas, URLs amigaveis)
 * Aqui iremos criar nossa aplicaao ANGULAR
 * Eh um router
 */

 //Criamos um modulo (aplicaçao em angular)
 //Se quiser criar algum componente, biblioteca pra rodar no angular, eh sempre MODULE
 //O angular trabalha com a tecnica de Injeao de Dependencia. Para habilitar comandos, temos que injetar modulos no array, como um Use Namespace
 //Pra definir as urls amigaveis, temos que injetar o modulo NGROUTE
 var aplicacao = angular.module("SISCONTATOS", ["ngRoute"]);

 //Definimos as Urls amigaveis, as rotas de navegaçao no projeto
 //Sempre que o usuario digitar uma URL, vai abrir um controller e uma view (rota padrao do MVC)
 //Tudo que começa com $ nao eh JQUERY, sao objetos internos do Angular!
 //Este objeto routeProvider eh herdado do NGROUTE
 aplicacao.config(function($routeProvider){
 	//Uma URL amigavel para cada pagina a ser acessada
 	$routeProvider.when("/ListarContatos", {
 		controller: "contatoController",
 		templateUrl: "App/Views/listar.html"
 	});

	$routeProvider.when("/CadastrarContatos", {
		controller: "contatoController",
 		templateUrl: "App/Views/cadastrar.html"
	});

	$routeProvider.otherwise({ redirectTo: "/ListarContatos"})

 });
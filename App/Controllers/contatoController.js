//Eh no controller que programamos a tela e toda a logica de carregamento da pagina
//Codigos que serao executados 



//Existem dois tipos de escopo: Local e Global
//E injetamos o objeto LOCATION para fazer o redirecionamentos da pagina

//Injetamos o serviço
aplicacao.controller("contatoController", 
	function($scope, $rootScope, $location, contatoService){
	
	$scope.Nome;
	$scope.Email;
	$scope.Telefone;
	$scope.Data;

	//Metodo generico de redirecionamento
	//redirecionar('/Listar') ou redirecionar('/Cadastrar')
	//Como a index nao passou por nenhuma rota de controller, interceptamos o clique do botao no escopo global
	$rootScope.redirecionar = function(rota){
		//este eh o redirect do angularJs
		$location.path(rota);
	};

	//No clique do usuario, vai carregar os dados do banco e retornar a view
	$scope.clickCarregar = function() {
		//Criamos lista (Array) para sincronizar na tela:

		$scope.listaContatos = [
			{
				Codigo: 1,
				Nome: "Danilao",
				Email: "danilao@gmail.com",
				Telefone: "(11) 234 5678",
				Data: "05/07/1988"
			},
			{
				Codigo: 2,
				Nome: "Brunao",
				Email: "brunao@gmail.com",
				Telefone: "(12) 234 5678",
				Data: "06/07/1988"
			},
			{
				Codigo: 3,
				Nome: "Paulao",
				Email: "paulao@gmail.com",
				Telefone: "(13) 234 5678",
				Data: "07/07/1988"
			},
			{
				Codigo: 4,
				Nome: "Frota",
				Email: "frota@gmail.com",
				Telefone: "(14) 234 5678",
				Data: "08/07/1988"
			}

		];
	};

	// Criamos 2 funçoes para pegar o clique dos botoes
	$scope.clickLimpar = function(){
		$scope.Nome = "";	
		$scope.Email = "";
		$scope.Telefone = "";
		$scope.Data = "";
	};

	$scope.clickCadastrar = function(){

		//Fizemos o mapeamento de VIEW MODEL(SCOPE)
		//Com o DOMAIN MODEL (MODEL WEB API)
		//Montamos um objeto com o mesmo formato esperado no serviço
		var novoAmigo = {
			NM_AMIGO : $scope.Nome,
			DS_EMAIL : $scope.Email,
			NR_TELEFONE : $scope.Telefone,
			DT_NASCIMENTO : $scope.Data
		};

		contatoService.Cadastrar(novoAmigo).success(function(){
			$scope.clickLimpar();
			alert("Contato cadastrado com sucesso!");
			
		}).error(function(){
			alert("Deu coco");
		});

	};

	//Ao excluir subimos a posiçao da linha (1, 2, 3, 4)
	//E subimos tambem os dados do contato
	$scope.clickExcluir = function(posicaoLinha, contato){
		//alert(posicaoLinha + 1);
		////Mesmo o campo nao estando visivel, o angular guarda os dados daquele registro, inclusive o indice da linha corrente!
		//alert(contato.Data);

		//Mandamos excluir o registro do ARRAY (coleçao)
		$scope.listaContatos.splice(posicaoLinha, 1);
	};
});
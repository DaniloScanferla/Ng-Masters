//No Service eh onde vao ficar as regras de negocio e acesso externo a serviços AJAX

//injetamos o objeto $http para fazer chamadas AJAX
aplicacao.service("contatoService", function($http){
	
	var servico = "http://servicekluh.azurewebsites.net/api/amigo";

	//O THIS aqui eh como se fosse um modificador de acesso public (visibilidade)
	this.Listar = function(){
		return $http({
			url: servico,
			method: "GET"
		});
	};
	this.Cadastrar = function(novoContato){
		return $http({
			url: servico,
			method: "POST",
			data: novoContato
		});
	};	
});

//criando variaval
//injecao de dependencia: ex: ngResource q.foi definido por outra app (compartilhado)
//scope é a dependencia

//var app = angular.module("oss",[]);
var app = angular.module("oss",["ngResource"]);


app.controller("ProdutosController",[

	"$scope", function($scope){
	// controller ( funcionalidade que atende a app )

	//$scope.clicou = function(){
	//	$scope.valor =  "clicou no valor";
	//};
	//$scope.valor = "Virginia";

	$scope.telefones =  [];
	$scope.novo = function(){
		$scope.telefones.push({ddd: "35", num:"xxx"});
	}

}
]);

// configurando o recurso
app.factory("ClienteService',['$resource', function($)]

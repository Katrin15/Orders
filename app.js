(function(){
	var app = angular.module("orders", [ ]);

	app.controller("SendOrderController", function() {

		this.order = {
			theme: "",
			themeText: "",
			projectName: "",
			projectUrgency: ""
		};

	});

	
	/*
	app.controller("TableDataController", function($scope, $http) {

	  	$http.get("orders.json").then(function(res){
	         $scope.todos = res.data;
	         console.log($scope.todos);               
	    });
	});
	*/

	app.controller("TableDataController", function($scope, $http) {


	    $http.get("orders.json").then(function(res){
	         $scope.orders = res.data;	             
	    });
	    
	});

	




})(); //main function 
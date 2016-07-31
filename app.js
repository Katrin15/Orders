(function(){
	var app = angular.module("orders", [ ]);

	app.controller("SendOrderController", function($scope, $http, $httpParamSerializerJQLike) {

		this.order = {
			theme: "",
			themeText: "",
			projectName: "Арктические медведи",
			orderUrgency: "low"
		};

		this.addOrder = function() {

			console.log(this.order);

			
			$http({
				  url: 'addOrder.php',
				  method: 'POST',
				  data: $httpParamSerializerJQLike(this.order), // Make sure to inject the service you choose to the controller
				  headers: {
				    'Content-Type': 'application/x-www-form-urlencoded' // Nte the appropriate header
				  }
				}).then(function(res){
	         		$scope.mimi = res.data;
	         		console.log(res.data);	             
	    		});
					//success(function(res) { 
					// do something here
					//console.log("ура"); 
					//console.log(res);
					//console.log(order2);
				//});
		};

	});

	
	
	app.controller("TableDataController", function($scope, $http) {


	    $http.get("orders.json").then(function(res){
	         $scope.orders = res.data;	             
	    });
	    
	});
	



	




})(); //main function 
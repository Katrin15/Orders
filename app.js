(function(){
	var app = angular.module("orders", [ ]);

	/*
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
	         		clearOrder();	             
	    		});
					//success(function(res) { 
					// do something here
					//console.log("ура"); 
					//console.log(res);
					//console.log(order2);
				//});
		};

	});
	*/

	app.controller("SendOrderController", function($rootScope, $scope, $http, $httpParamSerializerJQLike) {

		$scope.order = {
			theme: "",
			themeText: "",
			projectName: "Арктические медведи",
			orderUrgency: "низкая"
		};


		$scope.addOrder = function() {
			
			$http({
				  url: 'addOrder.php',
				  method: 'POST',
				  data: $httpParamSerializerJQLike($scope.order), // Make sure to inject the service you choose to the controller
				  headers: {
				    'Content-Type': 'application/x-www-form-urlencoded' // Nte the appropriate header
				  }
				}).success(function(res) { //then(function(res){ console.log(res.data);
	    
	         		console.log(res);

	         		$rootScope.orders.unshift($scope.order); //при успешном ответе от сервера - добавить заявку в таблицу
	         		console.log($scope.orders);

	         		$scope.order = {
						theme: "",
						themeText: "",
						projectName: "Арктические медведи",
						orderUrgency: "низкая"
					};
	         		$scope.sendOrder.$setPristine();
	         		$scope.sendOrder.$setUntouched(); //очистить форму после отправки



	    		});
		};

	});


	
	
	app.controller("TableDataController", function($rootScope, $http) {


	    $http.get("orders.json").then(function(res){
	         //$scope.orders = res.data;	
	         $rootScope.orders = res.data;  
	    });

	    // не нужно this.sortType = "theme"; //вначале сортировка по теме по алфавиту
	    //this.sortReverse = 1; // ini
	    this.sortReverseI = [];
	    this.icon = ["glyphicon glyphicon-sort-by-alphabet", "glyphicon glyphicon-sort-by-alphabet", "glyphicon glyphicon-sort-by-alphabet", "glyphicon glyphicon-sort-by-alphabet"];


	    this.sortColumn = function(sortType, i) {
	    	this.sortType = sortType;
	    	this.sortReverseI[i] = !this.sortReverseI[i];
	    	
	    	this.sortReverse = this.sortReverseI[i];

	    	this.icon[i] != "glyphicon glyphicon-sort-by-alphabet" ? 
	    	this.icon[i] = "glyphicon glyphicon-sort-by-alphabet" : this.icon[i] = "glyphicon glyphicon-sort-by-alphabet-alt"

	    	//console.log(this.sortReverseI);
	    	//console.log(this.sortReverse);
	    }
	    
	});
	




	/*
	app.controller("TableDataController", [ "$http", function($http) {
		var orders = this;

	    $http.get("orders.json").success(function(res){
	         orders = res;
	         console.log(res);
	         console.log(orders); // все равно не видно в html (?)	             
	    });
	    
	}]);
	*/

	



	




})(); //main function 
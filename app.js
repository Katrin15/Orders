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

	app.controller("TableDataController", function($http) {

		this.orders = [
  {
    "theme": "Северный полюс и животные",
    "themeText": "Я бы очень хотел познакомиться с арктическими медведями. С уважением, Николай",
    "projectName": "Арктические медведи",
    "projectUrgency": "средняя"
  },

  {
    "theme": "Антиквариат",
    "themeText": "Продам СРОЧНО сервиз немецкий Мадонна, 1954 года выпуска",
    "projectName": "Сервиз 'Мадонна'",
    "projectUrgency": "срочная"
  },

  {
    "theme": "Грецкие орехи",
    "themeText": "Здравствуйте! Считаю необходимым представить свою продукцию на фестивале. Мы варим очень вкусное варенье из грецких орехов. Абхазия, город Гагры",
    "projectName": "Фестиваль 'Московское Варенье'",
    "projectUrgency": "срочная"
  },

  {
    "theme": "бюллетенини",
    "themeText": "Поставлю много бюллетеней к выборам, обеспечу ручками. Звонить в рабочее время",
    "projectName": "Выборы Президента РФ",
    "projectUrgency": "средняя"
  },

  {
    "theme": "инженерные сооружения на Марсе",
    "themeText": "Я инженер с 20-ти летним стажем и хотел бы принять участие в разработке конструкции и строительстве первых жилых и подсобных сооружений при колонизации Марса.",
    "projectName": "Колонизация Марса 2030",
    "projectUrgency": "низкая"
  } 
];

//	  	$http.get("orders.json").then(function(res){
//	         this.orders = res.data;
//	         console.log(this.orders);          
//	    });

	    
//	    console.log(this.orders);

	    
	});

	




})(); //main function 
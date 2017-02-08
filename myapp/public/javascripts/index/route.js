define(['app'],function  (app) {
	app.config(['$routeProvider',function  (route) {
		route.when('/',{
			controller:"HomeController",
			template:"\
			<h1>这是主页{{name}}</h1>\
			"
		}).when('/bootstrap',{
			controller:"bootController",
			template:"<h1>bootstrap主页</h1>"
		}).otherwise({
			redirectTo:"/"
		});
	}]);
});
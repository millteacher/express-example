require.config({
	paths:{
		'angular':"/angular/angular",
		'angular-route':"/angular-route/angular-route",
		'nav':"/javascripts/common/nav"

	},
	shim:{
		'angular':{
			exports:'angular'
		},
		'angular-route':{
			exports:'angular-route',
			deps:['angular']
		},
		'nav':{
			exports:'nav',
			deps:['angular']
		}
	}
});

require([
	'angular',
	'angular-route',
	'obj',
	'app',
	'route',
	'homeCtrl',
	'myService',
	'myFillter',
	'navHttp',
	'myCtrl',
	'nav'
	
	],function  (angular) {

	angular.bootstrap(document,["myApp"]);//跟ng-app是一个意思，区别在于boostrap可以指定多个模块
});

// amd模块化
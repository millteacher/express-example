require.config({
	paths:{
		'angular':"/angular/angular",
		'nav':"/javascripts/common/nav"

	},
	shim:{
		'angular':{
			exports:'angular'
		},
		'nav':{
			exports:'nav',
			deps:['angular']
		}
	}
});

require([
	'angular',
	'app',
	'myCtrl',
	'nav'
	
	],function  (angular) {

	angular.bootstrap(document,["myApp"]);//跟ng-app是一个意思，区别在于boostrap可以指定多个模块
});

// amd模块化
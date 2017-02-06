require.config({
	paths:{
		'angular':"/angular/angular"

	},
	shim:{
		'angular':{
			exports:'angular'
		}
	}
});

require(['angular','index','myctrl','dire'],function  (angular) {
	angular.bootstrap(document,["myApp"]);//跟ng-app是一个意思，区别在于boostrap可以指定多个模块
});
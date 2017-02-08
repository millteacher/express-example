define(['app'],function  (app) {

	app.factory('navHttpService',['$http','$q','myService',function  (h,q,m) {
		var navHttpService={};
		navHttpService.getNavData=function  () {
			// return h.get('/nav');
			var defered= q.defer();
			h.get('/nav').then(function  (data) {
				data.data.brand="jone";
				defered.resolve(data);
			},function  (err) {
				defered.reject(err);
			});
			return defered.promise;
		};
		return navHttpService;
	}]);
});
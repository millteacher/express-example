define(['app'],function  (app) {
	app.directive('millNav',function  () {
		return {
			restrict:"AE",
			templateUrl:"/html/common/nav.html",

			controller:function($scope,navHttpService) {
				//$http.get();
				navHttpService.getNavData()
				.then(function  (obj) {
					 $scope.data=obj.data;
				},function  (err) {
					console.error(err);
				});
				// $scope.data={}

			}
		}
	});
})
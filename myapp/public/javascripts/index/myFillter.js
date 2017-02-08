define(['app'],function  (app) {
	app.filter('myFilter',['myService',function  (m) {
		return function  (str) {
			return m.mySub(str);
		}
	}])
});
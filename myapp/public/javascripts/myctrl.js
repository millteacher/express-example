define(['index'],function  (index) {
	function myCtrl (s) {
		s.name="i'am myCtrl";
		s.func=function  (temp) {
			console.log(temp);
		}
	}

	index.controller("myCtrl",['$scope',myCtrl]);
});

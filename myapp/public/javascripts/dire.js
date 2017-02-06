define(['index'],function  (app) {
	app.directive('myDirective',function  ($templateCache) {
		return {
			restrict:"EA",
			priority:0,
			terminal:false,//中止优先级低的指令
			/*template:"\
				<span>mill</span>\
			",*/
			// template:$templateCache.get("hello.html")
			// templateUrl:"/html/hello.html"
			transclude:true,
			replace:false,
			template:function  (element,attr) {//element是一个jq对象
				return "<div><input type='text' ng-model='name'/><div ng-transclude></div>name:<span>{{name}}</span><span ng-bind='age'></span></div>"
			},
			scope:{//隔离作用域,=双向绑定@单向引用,作为字符串&方法引用
				name:"=myDirective",
				boo:"@ok",//ng-if
				func:"&fun"
			},
			controller:function  ($scope) {
				$scope.name="i am mill",
				$scope.age=29
			},
			link:function  (scope,element,attr,prent) {//指令渲染完毕的时候被调用
				//所有对dom的操作都放在这里。

				if(scope.boo=="false"){
					element.empty();
				}
			},
			/*compile:function  (element,attr) {
				return {
					pre:function  (scope,element,attr) {
						
					},
					post:function  (scope,element,attr) {
						
					}
				}
			}*/

		};
	});
});
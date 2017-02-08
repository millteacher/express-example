define(['app','obj'],function  (app,tempService) {
// app.service('myService',tempService);//var obj=new tempService()
		app.provider('myService',function  () {
			this.$get=function  () {
				return new tempService();
			}
			//var obj=this.$get();
		});
});

//factory construct 

/*function myObject (name,age) {
	this.name=name;
	this.age=age;
}

var obj=new myObject("mill");
obj.name="mill"*/